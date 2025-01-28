const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'No tienes autorización' });
    }

    try {
        let [type, token] = authorization.split(" ");
        
        if (type === 'Bearer' || type === 'Token') {
            const openToken = jwt.verify(token, process.env.SECRET);
            req.user = openToken.user
            // console.log('User authenticated:', openToken.user);
            // console.log(req.user);
            next()
        } else {
            return res.status(401).json({ message: 'Token inválido' });
        }
    } catch (error) {
        res.json({ message:'Hubo un error', error });
    }
}