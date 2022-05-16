import itemHeader from '../assets/item-header.png';
import itemFooter from '../assets/item-footer.png';
import bullet from '../assets/bullet.png';
import btnClose from '../assets/btn-close.png';
import itemOrnament1 from '../assets/item-ornament-1.png';
import ornament4 from '../assets/ornament-4.png';

export const Item = ({ title, ornameType, footerText }) => {
    return (
        <div className="flex flex-col min-w-fit">
            <div className='ml-4 mb-4 '>
                <span className="font-bebas text-4xl text-[#ffffff] font-thin tracking-[.5em]">{title ? title : 'THE LOST TOME'}</span>
            </div>
            <img src={itemHeader} alt="item-header" className='w-auto h-auto' />
            <div className='flex 2xl:ml-9 xl:ml-4'>
                <img src={bullet} alt="item-header" className='w-auto h-9' />
                <div className='ml-4 pt-3'>
                    <span className='font-bebas text-2xl text-[#ffffff] font-thin tracking-[.5em]'>Position</span>
                </div>
                <div className='ml-auto mr-4'>
                    <img src={btnClose} alt="btn-close" className='w-auto h-14' />
                </div>
            </div>
            <div className='ml-9 w-64'>
                <span className="font-bebas text-sm text-[#ffffff]/50 font-extrabold tracking-[.175em]">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </span>
            </div>
            <div className={`relative`}>
                <img src={itemFooter} alt="item-footer" className='w-auto h-auto' />
                {footerText && <div className='absolute right-4 -bottom-2'>
                    <span className='font-alarmclock text-3xl text-white'>7.5 ETH</span>
                </div>}
            </div>
            <div className='flex ml-7 mt-4'>
                <div>
                    <img src={itemOrnament1} alt="item-ornament1" className='w-auto h-14 mt-3 object-scale-down' />
                </div>
                {ornameType === '1'
                    ?
                    <div className='relative'>
                        <img src={ornament4} alt="ornament4" className='ml-2 w-auto h-[100px]' />
                        <span className="absolute top-8 left-12 mb-2 font-alarmclock text-4xl text-[#FF8E32] font-thin tracking-[.5em]">MINT</span>
                    </div>
                    : <span className="ml-4 font-alarmclock xl:text-2xl 3xl:text-4xl text-[#ffffff] tracking-[.5em] self-end">00:00:25</span>}


            </div>
        </div>
    )
}
