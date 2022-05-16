import btnSend from '../assets/btn-send.png';
import icon6 from '../assets/ico-6.png';
import loadingBar from '../assets/loading-bar.png';
import icon1 from '../assets/ico-1.png';
import icon2 from '../assets/ico-2.png';
import icon3 from '../assets/ico-3.png';
import icon4 from '../assets/ico-4.png';
import icon5 from '../assets/ico-5.png';
import icon7 from '../assets/ico-7.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import discord from '../assets/discord.png';
import opensea from '../assets/opensea.png';
import telegram from '../assets/telegram.png';
import { useState } from 'react';

export const Info = () => {
    const [hoverImg, sethoverImg] = useState('');

    let media = [
        {bg: icon1, image: instagram}, 
        {bg: icon2, image: twitter}, 
        {bg: icon7, image: discord}, 
        {bg: icon3, image: opensea},
        {bg: icon4, image: telegram}, 
        {image: icon5}
    ]

    const handleMouseOver = (event, data) =>{
        // sethoverImg(event.target.id);
        if (data.bg) {
            document.getElementById(`bg-${event.target.id}`).style.opacity = 100;            
        }
    }

    const handleMouseLeave = (event) =>{
        // sethoverImg(event.target.id);
        console.log(event.target.id);
        document.getElementById(`bg-${event.target.id}`).style.opacity = 0;
    }

    return (
        <div >
            <div className='flex justify-start space-x-2 '>
                <input className='flex-1 p-2 font-bebas text-[#ffffff] bg-transparent text-2xl  tracking-[.2em] border border-white' placeholder='Name'/>
                <input className='flex-1 p-2 font-bebas text-[#ffffff] bg-transparent text-2xl  tracking-[.2em] border border-white' placeholder='Email'/>
                {/* <div className='flex-1 p-2 font-bebas text-[#ffffff] text-2xl  tracking-[.2em] border border-white'>Name</div>
                <div className='flex-1 p-2 font-bebas text-[#ffffff] text-2xl  tracking-[.2em] border border-white'>Email</div> */}
            </div>

            <div>
                <textarea rows="4" className={'border border-white bg-black font-bebas text-2xl text-white p-4 mt-2 w-full'}></textarea>
            </div>

            <div className='mt-4'>
                <button>
                    <img src={btnSend} alt='btnSend' />
                </button>
            </div>

            <div className='w-64 mt-4'>
                <span className='text-[#ffffff] text-sm tracking-[.2em]'>Lorem Ipsu Dolor sit amet Lorem Ipsu Dolor sit ametLorem Ipsu Dolor sit </span>
            </div>

            <div className='flex space-x-5'>
                <div>
                    <div className='flex justify-start my-2'>
                        <span className='flex-1 font-bebas text-[#ffffff] text-xl tracking-[.2em]'>Position</span>
                        <span className='flex-1 font-bebas text-[#ffffff] text-xl tracking-[.2em]'>Position 10</span>
                    </div>
                    <img src={loadingBar} alt="loading-bar" className='h-auto w-auto' />
                </div>
                <div>
                    <img src={icon6} alt="icon-6" className='h-auto ' />
                </div>
            </div>

            <div className='flex justify-between mt-10'>
                {media.map((it, i) => (
                    <div key={it.image} className='relative'>
                        <img id={`bg-${i}`} src={it.bg} alt="icon" className={`h-auto w-auto opacity-0 transition duration-600`}  />
                        <img id={i} src={it.image} alt="icon" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto w-auto transition duration-1000' 
                        onMouseOver={e => handleMouseOver(e, it)} onMouseLeave={handleMouseLeave}/>
                    </div>
                ))}
            </div>

            <div className='mt-9'>
                <span className='font-bebas text-[#ffffff] text-5xl tracking-[.1em] '>POSITION</span>

            </div>
        </div>
    )
}