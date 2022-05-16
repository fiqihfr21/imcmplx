import React, {useState} from "react";
import productHeader from '../assets/header-product.png';
import dummyImage from '../assets/dummy-image-3.png';

export const Card = () => {
    const [current, setCurrent] = useState(1)
    return (
        <div className={"flex flex-row"}>
            <div className="flex flex-col w-full mx-4">
                <div className={'relative w-auto h-100'}>
                    <div className={'static'}>
                        <div className={'absolute left-0 top-0'}>
                            <img src={productHeader} alt="item-header" className='w-64 h-24'/>
                        </div>
                    </div>
                </div>

                <img src={dummyImage} alt="product-images" className='w-auto h-auto ml-14 mt-12 bg-blue-900'/>
            </div>
            <div className={'flex flex-col w-full ml-12'}>
                <div className="flex flex-col">
                    <h1 className="font-bebas text-3xl text-[#ffffff] font-thin tracking-[.2em] mt-20">
                        RYUJIN : SHINKA 1/6 SCALE FIGURE
                    </h1>
                    <p className={'text-white w-8/12 font-thin my-7 opacity-40 text-lg'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aliquam dolorem dolorum ducimus enim magnam non nostrum officia perferendis quae, suscipit tempore velit voluptates? Aperiam ipsum libero quam quas sed.
                    </p>
                </div>

                <div className={'bg-[#111111] w-[58%] h-auto px-4 py-4'}>
                    <div>
                        <span className={'text-white font-bebas text-xl mr-2 tracking-wider'}>SKU:</span>
                        <span className={'text-white text-base font-thin'}>0012</span>
                    </div>
                    <div>
                        <span className={'text-white font-bebas text-xl mr-2 tracking-wider'}>CATEGORY:</span>
                        <span className={'text-white text-base font-thin'}>Clothes</span>
                    </div>
                    <div>
                        <span className={'text-white font-bebas text-xl mr-2 tracking-wider'}>TAGS:</span>
                        <span className={'text-white text-base font-thin'}>Dissident, Hierarchy</span>
                    </div>

                    <div className={'flex flex-row mt-10 items-center'}>
                        <button className={'bg-transparent text-white text-[20px] border-2 border-[#262525] flex justify-center items-center w-10 h-10'}
                            onClick={() => {
                                if(current > 1) setCurrent(current - 1)
                            }}
                        >
                            -
                        </button>
                        <div className={'bg-transparent text-white text-[12px] border-y-2 border-[#262525] flex justify-center items-center w-10 h-10'}>
                            {current}
                        </div>
                        <button className={'bg-transparent text-white text-[20px] border-2 border-[#262525] flex justify-center items-center w-10 h-10'}
                             onClick={() => setCurrent(current + 1)}
                        >
                            +
                        </button>

                        <button className={'bg-white w-40 h-14 ml-4 flex justify-center items-center font-bebas rounded-sm'}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

