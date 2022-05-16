import dummy1 from '../assets/item-1.png';
import dummy2 from '../assets/product-image.png';
import dummy3 from '../assets/item-2.png';
import dummy4 from '../assets/item-3.png';
import dummy5 from '../assets/item-4.png';
import dummy6 from '../assets/item-5.png';
import dummy7 from '../assets/item-6.png';
import dummy8 from '../assets/item-7.png';
import dummy9 from '../assets/item-8.png';
import dummy10 from '../assets/item-9.png';
import {Cards} from "../component/cards";
import productHeader from "../assets/header-product.png";
import footerProduct from "../assets/footer-product.png";
import { Link } from 'react-router-dom';

// page 7
export const Goods = () => {
    const cardList1 = [
        {
            image: dummy1,
            title: 'RYUJIN : SHINKA 1/6 SCALE FIGURE',
            desc: '$650-SOLD OUT',
            url: '/goods/page-14'
        },
        {
            image: dummy3,
            title: 'RYUJIN : SHINKA 1/6 SCALE FIGURE',
            desc: '$650-SOLD OUT',
            url: '/goods/page-14'
        },
        {
            image: dummy4,
            title: 'RYUJIN : SHINKA 1/6 SCALE FIGURE',
            desc: '$650-SOLD OUT',
            url: '/goods/page-14'
        },
        {
            image: dummy5,
            title: 'RYUJIN : SHINKA 1/6 SCALE FIGURE',
            desc: '$650-SOLD OUT',
            url: '/goods/page-14'
        },
        {
            image: dummy6,
            title: 'RYUJIN : SHINKA 1/6 SCALE FIGURE',
            desc: '$650-SOLD OUT',
            url: '/goods/page-14'
        },
        {
            image: dummy7,
            title: 'RYUJIN : SHINKA 1/6 SCALE FIGURE',
            desc: '$650-SOLD OUT',
            url: '/goods/page-14'
        },
        {
            image: dummy8,
            title: 'RYUJIN : SHINKA 1/6 SCALE FIGURE',
            desc: '$650-SOLD OUT',
            url: '/goods/page-14'
        },
        {
            image: dummy9,
            title: 'RYUJIN : SHINKA 1/6 SCALE FIGURE',
            desc: '$650-SOLD OUT',
            url: '/goods/page-14'
        },
        {
            image: dummy10  ,
            title: 'RYUJIN : SHINKA 1/6 SCALE FIGURE',
            desc: '$650-SOLD OUT',
            url: '/goods/page-14'
        },
    ];
    const category = [
        "1/6 Toys",
        "Fabrics",
        "Posters",
        "Mics",
    ];

    return (
        <div className={"flex flex-row justify-center container mx-auto py-12 px-40"}>
            <div className={"min-w-[20vw]"}>
                <div className={'relative w-auto h-100'}>
                    <div className={'static'}>
                        <div className={'absolute left-0 top-0'}>
                            <img src={productHeader} alt="item-header" className='w-64 h-24'/>
                        </div>
                    </div>
                </div>

                <div className={"flex flex-col mt-16 ml-8"}>
                    {category.map(item => (
                        <h2
                            className="font-bebas text-4xl text-[#ffffff] hover:text-[#FF8E32] font-thin tracking-[.3em]">
                            <a href={"#"}>{item}</a></h2>
                    ))}
                </div>
            </div>

            <div className={"ml-12 mt-12 grid gap-4 grid-cols-3"}>
                {cardList1.map((card, index) => {
                    return (
                        <Link to={card.url}>
                            <Cards key={index} {...card} catalog/>
                        </Link>
                    )
                })}
            </div>

            <div className={'static'}>
                <div className={'absolute right-8 -bottom-20'}>
                    <img src={footerProduct} alt="product-footer" className='w-auto h-auto'/>
                </div>
            </div>
        </div>
    )
}
