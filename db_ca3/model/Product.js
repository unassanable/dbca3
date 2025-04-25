const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0.01, 'Price must be greater than 0'],
    },
});

module.exports = mongoose.model('Product', productSchema);
