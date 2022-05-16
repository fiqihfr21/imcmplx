
import { Info } from '../component/info';
import ornament2 from '../assets/ornament-2.png';
import { BoxItem } from '../component/boxItem';

export const Page3 = () => {
    const sideListItem = [
        { id: 1 }, { id: 2, hightlight: true }, { id: 3 }, { id: 4 }, { id: 5, hightlight: true }, { id: 6, hightlight: true }
    ];

    return (
        <div className="mt-14 flex">
            <div className='flex-1 relative'>
                <img src={ornament2} alt='ornament-2' style={{ zIndex: -1 }} className='absolute left-0 h-full w-auto' />

                <div className='mt-10 ml-12'>
                    <BoxItem>
                        {sideListItem.map(it => (
                            <div key={it.id} className='relative'>
                                <div className='flex p-2 mb-2 mt-2'>
                                    <div className='w-28 h-20 bg-gray-600 shrink-0'>
                                    </div>

                                    <div className='ml-6 flex flex-col'>
                                        <span className='font-bebas text-[#ffffff] text-base lg:text-lg xl:text-sm tracking-[.3em]'>ACQUIRED BY:</span>
                                        <span className='font-bebas text-[#ffffff] text-base lg:text-lg xl:text-sm tracking-[.3em]'>0X63358726V382392</span>
                                        <span className='font-bebas text-[#ffffff] text-base lg:text-lg xl:text-sm tracking-[.3em]'>FOR 0,7 ETH</span>
                                    </div>
                                </div>

                                {it.hightlight &&
                                    <div className='bg-white/30 absolute right-0 top-0 w-full h-full'></div>
                                }
                            </div>

                        ))}
                    </BoxItem>
                </div>
            </div>

            <div className='flex-1 mr-10'>
                <Info />
            </div>
        </div>
    )
}