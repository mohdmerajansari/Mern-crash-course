import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json({success: true, data: products})
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: "Server side error"})
  }
}

export const createProduct =  async (req, res, next) => {
  const product = req.body;

  if(!product.name || !product.price || !product.image){
    return res.status(400).json({success : false, message : "Please provide all the necessary fields."})
  }
  const newPrduct = new Product(product);
  try {
    await newPrduct.save();
    res.status(201).json({success : true, date : newPrduct})
  } catch (error) {
    console.log('Error while creating product',error) 
    res.status(500).json({success: false, message : "Server error"})
  }
}

export const deleteProduct = async (req, res, next) => {
  const id =req.params.id;
  console.log(id);

  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({success: false, message: "Product not found"})
  }

  try {
    await Product.findByIdAndDelete(id)
    res.status(200).json({success : true, message : "Product deleted"})
  } catch(error) {
    console.log(error);
    res.status(500).json({success : false, message : "Server side error"})
  }
}

export const updateProduct =  async (req, res, next) => {
  const id = req.params.id;
  const product = req.body;
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({success: false, message: "Product not found"})
  }
  
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id,product,{new: true});
    res.status(200).json({success: true, data: updatedProduct})
  } catch (error) {
    console.log(error);
    res.status(404).json({success: false, message: "Server side error"})
  }
}