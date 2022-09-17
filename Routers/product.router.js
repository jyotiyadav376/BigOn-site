import express from "express";
import {addProduct,getProduct,deleteProduct,getSingleProduct,updateProduct} from "../Controllers/product.controller";

const router = express.Router();

router.post('/add-product',addProduct);
router.get('/get-product',getProduct);
router.get('/delete-product/:prod_id',deleteProduct);
router.get('/get-single-product/:prod_id',getSingleProduct);

router.post('/update-product',updateProduct);



export default router;