const mongoose = require("mongoose");
const Schema = mongoose.Schema
const orderSchema = mongoose.Schema({
    user : { type: Schema.ObjectId, ref: 'User' },
	 restaurant : { type: Schema.ObjectId, ref: 'Restaurant' },
   items: [{
     name: String,
     price: Number,
     quantity: Number
   }],
   totalPrice: Number,
   deliveryAddress: {
     street: String,
     city: String,
     state: String,
     country: String,
     zip: String
   },
   status: String
})

const OrderModel = mongoose.model("Order",orderSchema);

module.exports = {OrderModel}