const string = require('joi/lib/types/string');
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a product name"]
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    }
},
    {
        timestamp: true
    }
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product;