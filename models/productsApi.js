const mongoose = require('../utils/dbMongo');


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        validate: {
            validator: function(url){
                return url.indexOf('.jpg') != -1;
            },
            message: "Porfa, sólo imágenes JPG"
        }
    }
});

const Product = mongoose.model('Product', productSchema);


module.exports = Product;