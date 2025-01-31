const mongoose = require('mongoose');

const categoryProductsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
}
);

const CategoryProducts = mongoose.model('CategoryProducts', categoryProductsSchema);

module.exports = CategoryProducts;