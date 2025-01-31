const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
    try {

        const user = req.body

        const { password } = user;

        const salt = await bcryptjs.genSalt(13)

        const hashedPassword = await bcryptjs.hash(password, salt)
        user.password = hashedPassword

        const newUser = await User.create(user)

        res.status(201).json({ newUser })
     
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body

        let foundUser = await User.findOne({ username })
        
        if (!foundUser) return res.status(404).json({ message: 'Usuario o Contraseña incorrecta' })
        
        const validPassword = await bcryptjs.compare(password, foundUser.password)
        
        if (!validPassword) return res.status(401).json({ message: 'Usuario o Contraseña incorrecta' })

        const payload = { user: foundUser.id }

        jwt.sign(
            payload,
            process.env.SECRET_KEY,
            {
                expiresIn: '5m',
            },
            (error, token) => {
                if (error) throw error;
                res.json({ token });
            }
        )
    } catch (error) {
        res.json({ message: 'Hubo un error al iniciar sesión' })
    }
}

exports.verifyUser = async (req, res) => {
    try {
        const user = await User.findById(req.user).select('-password')

        res.json({ user })
    } catch (error) {
        res.status(500).json({ message: 'Hubo un error al verificar el usuario' })
    }
}

exports.updateUserById = async (req, res) => {
    try {
        const idUser = req.params.id

         const user = req.body

        if (user.password) {

            const { password } = user;

            const salt = await bcryptjs.genSalt(13)

            const hashedPassword = await bcryptjs.hash(password, salt)
            user.password = hashedPassword

        }

        const updatedUser = await User.findByIdAndUpdate(idUser, user, { new: true })

        res.json({ updatedUser })
    } catch (error) {
        res.status(400).json({ message: 'Hubo un error al actualizar el usuario'  })
    }
}