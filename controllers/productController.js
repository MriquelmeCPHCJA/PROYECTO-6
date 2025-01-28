const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    try {
        const { 
            nameProduct, 
            priceProduct, 
            quantityProduct, 
            descriptionProduct, 
            categoryProduct 
        } = req.body;

        const newProduct = await Product.create({
            nameProduct, 
            priceProduct, 
            quantityProduct, 
            descriptionProduct, 
            categoryProduct
        });

        res.json(newProduct);
    } catch (error) {
        res.status(500).json({message: 'Hubo un error al crear el producto'});
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).populate('categoryProduct');
        return res.json({products});
    } catch (error) {
        res.status(500).json({message: 'Hubo un error al obtener los productos'});
    }
}

exports.getProductById = async (req, res) => {
    try {
        const idProducto = req.params.id;
        const product = await Product.findById(idProducto).populate('categoryProduct');
        res.json({product});
        
    } catch (error) {
        res.status(500).json({message: 'Hubo un error al obtener el producto'});
    }
}

exports.updateProductById = async (req, res) => {
    try {
        const idProducto = req.params.id;
        const { 
            nameProduct, 
            priceProduct, 
            quantityProduct, 
            descriptionProduct, 
            categoryProduct  
        } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            idProducto, 
            { 
                nameProduct, 
                priceProduct, 
                quantityProduct, 
                descriptionProduct, 
                categoryProduct 
            }, 
            { 
                new: true 
            }
        ).populate('categoryProduct');
        
        res.json({updatedProduct});
    } catch (error) {
        res.status(500).json({message: 'Hubo un error al actualizar el producto'});
    }
}

exports.deleteProductById = async (req, res) => {
    try {
        const idProducto = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(idProducto);
        res.json({message: 'Producto eliminado', deletedProduct });
    } catch (error) {
        res.status(500).json({message: 'Hubo un error al eliminar el producto'});
    }
}