import React from 'react'
import { Link } from 'react-router-dom'
import "./Product.css"

const Product = ({product}) => {
    
    const getDiscountPercentage = () => {
        // discount equation ((Old Price - New Price) / Old Price) * 100
        const oldPrice = product.oldPrice
        const currPrice = product.price
        const discountPercent = Math.trunc(((oldPrice - currPrice) / oldPrice) * 100) 
        return `${discountPercent}%`
    }

    const stars = () => {
        const stars = "★★★★★"
        const rate = Math.round(((product.rate / 10) / 2))
        return stars.slice(0,rate)
    }

    return (
        <Link
            to={`${product.category.toLowerCase()}/${product.id}`}
            className='flex product w-full flex-col'
        >
            
            <div className='aspect-square  overflow-hidden w-full mb-2 relative'>
                <img src={product.images[0]} className='w-full block aspect-square rounded-md object-cover' alt="img" />
                {
                    product.discount && (
                        <span className='absolute bg-opacity-90 top-3 left-3 drop-shadow rounded-md p-1 text-md bg-main-purple text-white '>
                            {
                                getDiscountPercentage()
                            }
                        </span>
                    )
                }
            </div>
            
            <div className='flex items-center mb-1 justify-between'>
                <p className='text-xl text-main-purple font-jost font-bold'>
                    {
                        product.company                
                    }
                </p>
                
                <p className='text-md font-jost font-bold'>
                    {
                        product.discount ? (
                            <span className='mr-2 line-through text-gray-500'>
                                {
                                    `$${product.oldPrice}`
                                }
                            </span>
                        ) : ""
                    }
                    {
                        `$${product.price}`
                    }
                </p>
                
            </div>

            <div>
                <p className='text-md font-bold font-jost'>
                    {product.name}
                </p>
            </div>

            <div className='w-full flex justify-between items-center'>
                <p className='text-xl font-bold font-jost'>
                    {stars()}
                </p>
            </div>
        </Link>
    )
}

export default Product