import Products from '../Models/productmodel';

export const addProduct = (req,res)=>{
    console.log(req.body);
    try {
        const {name,price} = req.body
        const saveProduct = new Products({name:name,price:price})
        const productdata = saveProduct.save();
 
        if(productdata){
            res.status(200).json({
                data:saveProduct,
                message:'Successfully product added !'
             })
        }else{
            res.status(500).json({
                message:'Something went wrong !'
            })
        }


    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


export const getProduct = async (req,res)=>{

    const product =  await Products.find({});
     res.status(200).json({
        data:product,

        message:'Data fetched successfully!'

    })
}

export const deleteProduct = async(req,res)=>{
    const prodid = req.params.prod_id

    const deletedData = await Products.deleteOne({_id:prodid});
    // console.log(deletedData)
    res.status(200).json({
        message:'Data deleted successfully!'
    })
}


export const getSingleProduct = async(req,res)=>{
    const prodid = req.params.prod_id
    const getProd = await Products.findOne({_id:prodid})
    res.status(200).json({
        data:getProd,
        message:'Single Product data fetched.'
    })
}


export const updateProduct = async (req,res)=>{

    try {
        const {name,price,prodid} = req.body
        const updatedProd = await Products.updateOne( {_id:prodid},{name:name,price:price})
 
        if(updatedProd){
            res.status(200).json({
                data:updatedProd,
                message:'Successfully Product updated !'
            })
        }else{
            res.status(500).json({
                message:'Something went wrong !'
            })
        }


    } catch (error) {
        // res.status(500).json({
        //     message: error.message
        // })
        console.log(error)
    }
}
