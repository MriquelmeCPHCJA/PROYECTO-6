const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    nameProduct: {
        type: String,
        required: function(){return this.isNew},
        trim: true,
        unique: true
    },
    priceProduct: {
        type: Number,
        required: function(){return this.isNew}
    },
    quantityProduct: {
        type: Number,
        required: function(){return this.isNew}
    },
    descriptionProduct: {
        type: String,
        required: function(){return this.isNew},
        trim: true
    },
    categoryProduct: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CategoryProducts',
        }
    ]
}, { timestamps: true  }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;