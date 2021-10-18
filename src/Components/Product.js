import React, { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';


const Product = ({id, title, price, description, category, image, rating}) => {
    // const [rating ] = useState(
    //     Math.floor(Math.random()*(MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    // );
    
    const [hasPrime] = useState(Math.random() < 0.5)
    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic teext-gray-400">{category}</p>

            <Image src={image} height={200} width={200} objectFit="contain" />

            <h4 className="my-3">{title}</h4>

            <div className="flex">
                {
                    Array(Math.ceil(rating.rate)).fill().map((_,i) =>
                        <StarIcon  className="h-5 text-yellow-500" /> 
                        
                    )
                }
                <p>{rating.rate}</p>
            </div>
            <p className="text-xs my-2 truncate">{description}</p>

            <div className="mb-5 ">
                <Currency quantity={price} currency="BDT"/>
            </div>
            
            {
                hasPrime && (
                    <div className="flex item-center space-x-2 -mt-5 ">
                        <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                        <p className="text-xs text-gray-500">Free Next-day Delivery</p>
                    </div>
                    
                )
            }

            <button className="mt-auto button">Add To Basket</button>
        </div>
    );
};

export default Product;