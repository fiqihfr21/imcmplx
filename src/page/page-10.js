import { ItemWithImage } from "../component/itemWithImage";
import { BoxItem } from "../component/boxItem";

export const Page10 = () => {

    const sideListItem = [
        { id: 1 }, { id: 2, hightlight: true }, { id: 3 }, { id: 3 }, { id: 3, hightlight: true }, { id: 3, hightlight: true }
    ];

    return (
        <div className='container mx-auto py-10'>
            <div className='flex flex-col'>
                <div className="p-9 self-center">
                    <ItemWithImage header={false} margin={false} />
                </div>
            </div>

            <div className='mt-2 flex relative'>
                <div className='flex-1 ml-12 w-[500px]'>
                    <BoxItem>
                        {sideListItem.map(it => (
                            <div className='relative'>
                                <div className='flex p-2 mb-2 mt-2'>
                                    <div className='w-28 h-20 bg-gray-600 shrink-0'>
                                    </div>

                                    <div className='ml-6 flex flex-col'>
                                        <span className='text-[#ffffff] text-base lg:text-lg xl:text-sm tracking-[.5em]'>ACQUIRED BY:</span>
                                        <span className='text-[#ffffff] text-base lg:text-lg xl:text-sm tracking-[.5em]'>0X63358726V382392</span>
                                        <span className='text-[#ffffff] text-base lg:text-lg xl:text-sm tracking-[.5em]'>FOR 0,7 ETH</span>
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
        </div>
    )
}
