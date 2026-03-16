const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    items: [{
        productId: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'canceled'],
        default: 'pending'
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;