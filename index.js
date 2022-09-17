import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import productRouter from './Routers/product.router';


import middleware_cors from './Middlewares/cors.middleware'

const app = express();

const PORT = process.env.PORT || 9000

app.listen(PORT,()=>{
    console.log('Listen to port '+PORT)
})

app.use(middleware_cors.allowAll)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


mongoose.connect('mongodb://localhost:27017/Bigon')
.then(() =>{
    console.log('Database connected successfully')
})
.catch((err) =>{
    console.log(err)
})

app.use('/product',productRouter);