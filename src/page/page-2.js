import { useState } from 'react';
import { ItemCollection } from '../component/itemCollection';
import { ItemWithImage } from '../component/itemWithImage';
import chevLeft from '../assets/chevron-left.png';
import chevRight from '../assets/chevron-right.png';

export const Page2 = () => {
    const [current, setCurrent] = useState(0);

    const itemCollection = [
        { id: 1 }, { id: 2 }, { id: 3 }
    ];

    const carouselItems = [
        {
            id: 1,
            title: 'THE LOST TOME', //dumy
            link: '/on-sale/mint'
        },
        {
            id: 2,
            title: 'TOME LOST ', //dumy
            link: '/on-sale/page-8'
        },
        {
            id: 3,
            title: 'COMPONENT 3', //dumy,  
            link: '/on-sale/page-10'          
        }
    ]

    const nextButton = () => {
        console.log(current, "current");
        setCurrent(current === carouselItems.length - 1 ? 0 : current + 1);
    }

    const prevButton = () => {
        console.log(current, "current");
        setCurrent(current === 0 ? carouselItems.length - 1 : current - 1);
    }

    const activeSlide = 'opacity-100 transition duration-1000';
    const slide = 'opacity-0 transition duration-1000 scale-[1.08]';

    return (
        <div className="flex flex-col">
            <div className="p-9 self-center relative">
                <img src={chevLeft} alt="chevron-left" className='absolute left-0 top-1/3 cursor-pointer' onClick={prevButton} />
                <img src={chevRight} alt="chevron-right" className='absolute right-0 top-1/3 cursor-pointer' onClick={nextButton} />
                {carouselItems.map((it, i) =>
                    <div key={it.id} className={`${i === current ? activeSlide : slide} px-28`}>
                        {current === i && <ItemWithImage title={it.title} link={it.link} />}
                    </div>)}
                <div className='mt-4 flex justify-center space-x-4'>
                {carouselItems.map((it, i) =>
                    <span key={it.id} className={`h-4 w-4 rounded-full ${current === i ? 'bg-white' : 'bg-[#3F3D3D]' } inline-block cursor-pointer`} onClick={()=> setCurrent(i)}></span>)}                   
                </div>
            </div>

            <div className='mt-14 grid grid-cols-3 justify-items-center'>
                {itemCollection.map(it => (<ItemCollection key={it.id} />))}
            </div>
        </div>
    )
}