import React from 'react'
import axios from 'axios'

const baseURL = "http://localhost:3000/Products";


const getAllProducts = () => axios.get(baseURL);

const getProductById = (productId) => axios.get(`${baseURL}/${productId}`);

const addNewProduct = (product) => axios.post(baseURL, product);

const editProduct = (productId, product) =>
	axios.put(`${baseURL}/${productId}`, product);

const deleteProduct = (productId) => axios.delete(`${baseURL}/${productId}`);

export {
	getAllProducts,
	getProductById,
	addNewProduct,
	editProduct,
	deleteProduct,
};
