import React from 'react'
import { useSelector } from 'react-redux'
import ProductInCart from './ProductInCart'

const ProductsInCartHolder = () => {
    
    const productsIncart = useSelector(state => state.cart)

    return (
        <div className='lg:w-2/5 w-full'>
            {
                productsIncart.map(product => (
                    <ProductInCart product={product} key={product.id}/>
                ))
            }
        </div>
    )
}

export default ProductsInCartHolder