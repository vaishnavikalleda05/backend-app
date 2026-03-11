import productModel from "../models/productModel.js";

// const getProducts=async(req,res)=>{
//     const products=await productModel.find()
//     res.json("products/index",{products});

// }

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find();

    if (req.headers.accept && req.headers.accept.includes("application/json")) {
      return res.json(products);   // stop here
    }

    return res.render("products/index", { products });

  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const addProduct=async(req,res)=>{
    const product=req.body;
    await productModel.create(product);
    res.redirect("/products")

}

const addProductForm=async(req,res)=>{
    res.render("products/add")
}

const deleteProduct=async(req,res)=>{
    const id=req.params.id;
    await productModel.findByIdAndDelete(id)
    res.redirect("/products")
}

const editProductForm=async(req,res)=>{
    const id=req.params.id
    const product=await productModel.findOne({_id:id})
    res.render("products/edit",{product})
}
const saveProduct=async (req,res)=>{
    const id=req.params.id;
    await productModel.findByIdAndUpdate(id,req.body);
    res.redirect("/products")
}

export {getProducts,addProduct,addProductForm, deleteProduct,saveProduct,editProductForm}