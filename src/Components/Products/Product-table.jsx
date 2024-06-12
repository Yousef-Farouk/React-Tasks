import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link, Outlet, useLoaderData } from 'react-router-dom'

import { getAllProducts,deleteProduct, addNewProduct } from '../../Api/ProductApi'

import {getAllProductsAction,deleteNewProductAction } from '../../Store/productSlice';

import {useDispatch,useSelector} from 'react-redux'

export default function Producttable() {

    const dispatch = useDispatch();

    let {products,isLoading,error} = useSelector(state=>state.productSlice)

    useEffect(()=>{
        dispatch(getAllProductsAction())
    },[])


    
    const deleteHandler = (productId)=>{
        dispatch(deleteNewProductAction(productId))
    }


    // const response= useLoaderData()

    // let [products,setProduct] = useState(response.data)

    // const deleteHandler = async ( productId ) => {
    //     deleteProduct( productId ).then( response => {

    //         let filteredList = products.filter( ( product ) => product.id != productId )

    //         setProduct( filteredList )
    //     } ).catch( error => console.log( error ) )
    // }


    return (

        <>
            <div className="container">
            <Link to='/products/0/edit' className='mb-3'>
             <i className="fs-3 m-2 bi bi-plus-circle-fill my-4" ></i>
            </Link>
            <div className="row">
            {products && products.map((product)=>{
                return(
                    
                            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                                <div className="card custom-card mt-4 mb-4 ms-4 " >
                                    <img src={product.img} className="card-img-top w-100 " alt="..."/>
                                    <div className ="card-body">
                                        <h5 className ="card-title text-center">{product.name}</h5>
                                        <h5 className ="card-text text-center">{product.price} LE</h5>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                    {/* <Link to={`/products/${product.id}`}>
                                        <i className="mx-2 text-warning fs-5 bi bi-eye-fill"></i>
                                    </Link> */}

                                    <Link to={`/products/${product.id}/edit`}>
                                        <i className="mx-2 text-info fs-5 bi bi-pencil-square"></i>
                                    </Link>
                                        <i  className="mx-2 text-danger fs-5 bi bi-trash3-fill" onClick={()=>deleteHandler(product.id)}></i>
                                    </div>
                                </div>  
                            </div>
                             
                     
                )
               
               
            })}
            </div>
            </div>
            
             
        </>
    )
}



{/* <div className='p-1 text-center mt-5'>
<h1>Our Products</h1>
<div className="container d-flex flex-column align-items-start">

    <i className="fs-3 m-2 bi bi-plus-circle-fill"></i>

    
</div>
</div> */}

{/* <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((product)=>{
                            return (

                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    <td>

                                        <Link to={`/products/${product.id}`}>

                                            <i className="mx-2 text-warning fs-5 bi bi-eye-fill"></i>
                                        </Link>

                                        <Link to={`/products/${product.id}/edit`}>
                                            <i className="mx-2 text-info fs-5 bi bi-pencil-square"></i>
                                        </Link>
                                        <i  className="mx-2 text-danger fs-5 bi bi-trash3-fill"></i>
                                    </td>
                                </tr>
                            )
                        })}
                               
                    </tbody>
                </Table> */}
