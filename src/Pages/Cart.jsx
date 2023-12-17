import React from 'react'
import ProductsInCartHolder from '../Features/Cart/ProductsInCartHolder'
import ProductsInCartInfo from '../Features/Cart/ProductsInCartInfo'

const Cart = () => {
    
    return (
        <div className='container pt-[100px] lg:flex-row flex-col flex'>

            <ProductsInCartHolder/>
            <ProductsInCartInfo/>
        
        </div>
    )
}

export default Cart