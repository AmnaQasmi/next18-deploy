// ProductCard.tsx
'use client'
import Link from "next/link";
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/cartSlice'; // Adjust the path

interface IProduct {
    title: string;
    _id: string;
    price: number;
    details: string;
    description: string;
    image: any; // Adjust according to your image type
    category: {
        name: string;
    }
}

const ProductCard = ({ item }: { item: IProduct }) => {
    const dispatch = useDispatch();

    return (
        <div className="text-[#3d3d3d] body-font">
            <div className="lg:w-4/5 md:w-3/4 sm:w-1/4 rounded-lg justify-center items-start cursor-pointer shadow-lg shadow-black m-4 lg:p-4 md:p-5 p-5 ml-8 w-3/4">
                <Link href={''}>
                    <div>
                        <div className="block overflow-hidden">
                            <img
                                height={300}
                                width={300}
                                className="lg:h-[35vh] h-[25vh] block lg:w-[60vh] md:w-[45vh] sm:w-[55vh] w-[55vh] m-auto rounded-md"
                                src={item.image} alt="Product Of Cars" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-[#636262] text-base tracking-widest title-font mb-1">{item.category.name}</h3>
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
    );
};

export default ProductCard;

