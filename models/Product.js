const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    nameProduct: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    priceProduct: {
        type: Number,
        required: true
    },
    quantityProduct: {
        type: Number,
        required: true
    },
    descriptionProduct: {
        type: String,
        required: true,
        trim: true
    },
    categoryProduct: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CategoryProducts',
            required: true
        }
    ]
}, { timestamps: true  }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;