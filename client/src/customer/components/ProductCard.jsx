import React from 'react'

const ProductCard = ({ product }) => {
    return (
      <div className='product card cursor-pointer rounded-lg shadow-xl overflow-hidden w-[12rem] lg:w-[15rem] bg-white flex flex-col items-center mx-1'>
        <div className='product_image w-full h-[300px] flex justify-center items-center'>
          <img
            className='w-[200px] h-[250px] object-cover'
            src={product.imageUrl}
            alt="Product"
          />
        </div>
        <div className='product_details p-4 flex flex-col items-center text-center'>
          <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
          <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
        </div>
      </div>
    );
  };

export default ProductCard
