import React from 'react'
import { Button, Form } from "react-bootstrap";
import { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { addNewProduct, editProduct, getProductById } from '../../Api/ProductApi';
import { addNewProductAction ,updateNewProductAction } from '../../Store/productSlice';

import {useDispatch,useSelector} from 'react-redux'




export default function Productform() {

    const dispatch = useDispatch();



    let [ formData, setFormData ] = useState( {
        name: '',
        price: '',
        quantity: ''
    } )

    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        if (id != 0){
            getProductById(id).then(response=>{
                setFormData(response.data)
            }).catch(error=>{
                console.log(error);
            })
        }
    },[])

    

    const formHandler = ( e ) => {
        setFormData( {
            ...formData,
            [ e.target.name ]: e.target.value
        } )
    }


    const addHandler = (e)=>{
        e.preventDefault();
        if(id == 0){
            dispatch(addNewProductAction(formData)).then(()=>{
                navigate('/products')
            })
        }
        else {

            dispatch(updateNewProductAction(formData)).then(()=>{
                navigate('/products')
            })
        }
    }


    // const addHandler = ( e ) => {
    //     e.preventDefault();
    //     if ( id == 0 ) {
    //         addNewProduct( formData ).then( () => {
    //             navigate( '/products' )
    //         } ).catch( error => {
    //             console.log( error )
    //         } )
    //     } else {
    //         editProduct( id, formData ).then( () => {
    //             navigate( '/products' )
    //         } ).catch( error => {
    //             console.log("update error :" ,error )
    //         } )
    //     }
    // }

    return (
        <div className="container mt-3">
            <Form onSubmit={addHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        onChange={formHandler}
                        type="text"
                        placeholder="Enter Product Name"
                        name='name'
                        value={formData.name}
                    />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        onChange={formHandler}
                        value={formData.price}
                        type="number" placeholder="Enter Price" name='price' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        value={formData.quantity}
                        onChange={formHandler} type="number" placeholder="Enter Quantity" name='quantity' />
                    </Form.Group>

                <Button variant="dark" type="submit" className='mb-5'>
                    {id == 0 ? 'Add New Product' : 'Edit Product'}
                </Button>
            </Form>
        </div>
    )
}
