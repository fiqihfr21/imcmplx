import footerCollection from '../assets/footer-item-collection.png';
export const ItemCollection = () => {
    return (
        <div className="">
            <div className="bg-[#414042] ml-5 w-80 h-80 border-2 relative">
                <div className='bg-white w-full flex absolute bottom-0 test2'>
                    <div className='flex-1 flex flex-col p-2'>
                        <span className='font-bebas text-2xl font-thin tracking-widest'>CMPLX BORED</span>
                        <span className='font-bebas text-2xl font-thin tracking-widest'>APES</span>
                    </div>
                    <div className='flex-1 flex items-center p-2 test justify-end'>
                        <span className='font-alarmclock 2xl:text-3xl'>0.7 ETH</span>
                    </div>
                </div>
            </div>
            <div className='mt-1 relative'>
                <span className='absolute bottom-[9px] left-[55px] font-bebas xl:text-[12pt] 2xl:text-[13pt] text-[#ffffff] font-thin tracking-widest'>COLLECTIONS</span>
                <img src={footerCollection} alt='footer-collection' className='w-auto h-14' />
            </div>
        </div>
    );
}