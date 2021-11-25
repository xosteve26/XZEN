import React from 'react'
import { Link } from 'react-router-dom'


const ProductScreenCategory = (props) => {
    return (
        <>
    
        <section className="text-gray-600 body-font">
                <div className="container px-2 pt-1 pb-10 mx-auto">
                    <div className="flex flex-col text-center w-full mb-15">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Categories</h2>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-90">
                            <Link to='/products/category/Clothing'  className='no-underline'><h2 className="text-lg sm:text-xl text-indigo-500 font-medium title-font mb-2 text-center">Clothing</h2></Link>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-90">
                            <Link to='/products/category/Electronics'  className='no-underline'><h2  className="text-lg sm:text-xl text-indigo-500 font-medium title-font mb-2 text-center">Electronics</h2></Link>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-90">
                            <Link to='/products/category/Accessories'  className='no-underline'><h2  className="text-lg sm:text-xl text-indigo-500 font-medium title-font mb-2 text-center">Accessories</h2></Link>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-90">
                            <h2 className="text-lg sm:text-xl text-indigo-500 font-medium title-font mb-2 text-center">Category #4</h2>
                        </div>
                    </div>

                </div>
            </section>
            </>
    )
}

export default ProductScreenCategory
