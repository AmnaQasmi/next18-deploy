// HeroBanner.tsx
'use client'
import React, { useEffect, useState } from 'react';
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
import { useDispatch } from 'react-redux'; 
import { addItem } from '@/store/cartSlice';
import Image from 'next/image';

export const getProductData = async () => {
    const res = await client.fetch(`*[_type == "Product"]{
        title,
        price,
        _id,
        details,
        description,
        image,
        category -> {
        name
    } 
    }`);
    return res;
};

interface IProduct {
    title: string;
    _id: string;
    price: number;
    details: string;
    description: string;
    image: IImage;
    category: {
        name: string;
    };
}

const HeroBanner = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState<IProduct[]>([]);

    useEffect(() => {
        async function fetchData() {
            const result = await getProductData();
            setData(result);
        }
        fetchData();
    }, []);

    return (
        <div className="items-start justify-center container lg:px-5 px-4 lg:py-24 py-7 mx-auto flex flex-wrap -m-4 flex-row ">
            {data.map((item) => (
                <div key={item._id} className="text-[#3d3d3d] body-font">
                    <div className="">
                        <div className="lg:w-4/5 md:w-3/4 sm:w-1/4 rounded-lg justify-center items-start cursor-pointer shadow-lg shadow-black m-4 lg:p-4 md:p-5 p-5 ml-8 w-3/4">
                            <Link href={'/product/car/Bugatti Veyron'}>
                                <div>
                                    <div className="block overflow-hidden">
                                        <Image
                                            height={300}
                                            width={330}
                                            className="lg:h-[35vh] h-[25vh] block lg:w-[60vh] md:w-[45vh] sm:w-[55vh] w-[55vh] m-auto rounded-md"
                                            src={urlForImage(item.image).url()} alt="Product Of Cars" />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-[#636262] text-xl tracking-widest title-font mb-1">{item.category.name}</h3>
                                        <h2 className="text-[#070725] font-[Ariel] lg:text-2xl text-xl font-medium"> {item.title}</h2>
                                        <p className="mt-1 font-[Menlo] lg:text-xl text-lg font-medium">${item.price}m</p>
                                        <p className="my-2 flex-wrap break-words lg:text-xl text-lg font-[Ariel] font-medium lg:w-[260px]">Description: {item.description}. </p>
                                        <button
                                            onClick={() => dispatch(addItem({ name: item.title, price: item.price }))}
                                            className="text-[#d3d0d0] bg-[#1d5045] py-2 px-4 rounded focus:outline-none hover:bg-[#29685a]">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HeroBanner;