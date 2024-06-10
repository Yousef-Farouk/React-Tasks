
import React from 'react'
import { MyproductItem } from './Product-item'

import { productList } from '../../Models/productList'

export  function Products() {
    return (
        <div className='bg-light p-5 text-center'>
            <div className="container">
                <h1 className='mb-5'>Our Products</h1>
                <div className="row">
                {
                        productList.map((item,index)=>{
                            return <MyproductItem  item={item} ></MyproductItem>
                            
                        })
                    }
                </div>
            </div>
        </div>
    )
}