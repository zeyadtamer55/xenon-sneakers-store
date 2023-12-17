import React from 'react'

const ProductInCart = ({product}) => {
    return (
        <div className='w-full h-[150px] flex'>
            
            <div className='h-full aspect-square'>
                <img className='w-full h-full object-cover' src={product.images[0]} alt="img" />
            </div>

            

        </div>
    )
}

export default ProductInCart