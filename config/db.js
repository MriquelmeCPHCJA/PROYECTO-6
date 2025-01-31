const mongoose = require('mongoose');
const CategoryProducts = require('../models/CategoryProducts');
const Product = require('../models/Product');
const User = require('../models/User');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI) // Configuración de la conexión a la base de datos

        // Inicialización de los modelos de colecciones
        await CategoryProducts.init()
        await Product.init()
        await User.init()
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB;