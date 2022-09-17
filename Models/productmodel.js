import mongoose, { Schema } from "mongoose";
const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
    
});

export default mongoose.model('BigonProduct',ProductSchema);