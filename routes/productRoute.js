  const express =require("express");
  const router = express.Router();
  const Product = require('../models/product.js');
  const { getAllProducts, getProductById, createProduct, updateProducyById, deleteProductById } = require("../contollers/productContoller.js");


  //Retrive All documents
  router.get('/', getAllProducts);
  //Retrieve Document by id
  router.get('/:id', getProductById);
  
  //create a new document
  router.post('/', createProduct);
  
  //Udate a document
  router.put('/:id', updateProducyById);

  //Delete a document by id
  router.delete('/:id', deleteProductById);

  module.exports = router;