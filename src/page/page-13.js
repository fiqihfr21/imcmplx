

import dummyImage2 from '../assets/dummy-image-2.png';
import productHeader from '../assets/header-product.png';

export const Page13 = () => {
    const tags = ['Animation', 'Design', 'Inspiration', 'Philosophy', 'Special Effects', 'Technology'];

    return (
        <div className="flex flex-col relative container mx-auto py-12 px-40">
            <div className={'relative w-auto h-100'}>
                <div className={'static'}>
                    <div className={'absolute left-0 top-0'}>
                        <img src={productHeader} alt="item-header" className='w-64 h-24' />
                    </div>
                </div>
            </div>

            <div className='mt-12 space-x-6 flex justify-center'>
                <div className='w-[60%] flex flex-col'>
                    <img src={dummyImage2} alt='dummy-image2' />
                    <p className='mt-4 font-bebas text-4xl text-[#ffffff] font-thin'>
                        THE MATRIX IS BROKEN, CATS ARE A
                        DIRECT INDICATOR OF LAWLESSNESS LAWLESSNESS LAWLESSNESS LAWLESSNESS.
                    </p>

                    <span className='mt-4 text-lg text-[#ffffff]/50 font-thin '>
                        Lorem ipsum dolor sit amet Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                        sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                        elit. Duis sed odio sit amet nibh vulputate c Lorem ipsum dolor sit amet Lorem Ipsum. Proin
                        gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                        consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                        sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
                        odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
                        litora torquent per conubia

                        <div className='border-2 w-full h-32 my-10'></div>

                        Lorem ipsum dolor sit amet Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                        sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                        elit. Duis sed odio sit amet nibh vulputate c Lorem ipsum dolor sit amet Lorem Ipsum. Proin
                        gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                        consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                        sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
                        odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
                        litora torquent per conubia
                    </span>
                </div>

                <div className='w-[30%] h-fit bg-[#1A2120] '>
                    <div className='m-2  p-4 border-[#373F3F] border-2'>
                        <div className='font-bold text-2xl text-white font-bebas'>CATEGORIES</div>
                        <div className='border-b-2 border-[#D57647] my-2 w-5'></div>
                        <div className='font-light text-white font-bebas'>Animation</div>
                        <div className='font-light text-white font-bebas'>Design</div>
                        <div className='font-light text-white font-bebas'>Inspiration</div>
                        <div className='font-light text-white font-bebas'>Philosophy</div>
                        <div className='font-light text-white font-bebas'>Special Effects</div>
                        <div className='font-light text-white font-bebas'>Technology</div>
                    </div>

                    <div className='m-2 p-4 border-[#373F3F] border-2'>
                        <div className='font-bold text-2xl text-white font-bebas'>TAGS</div>
                        <div className='border-b-2 border-[#D57647] my-2 w-5'></div>
                        <div className='flex flex-wrap'>
                            {tags.map(it => (
                                <span className="text-[#7A7A7A] text-base after:content-['/'] after:px-5">
                                    <a href='#'>
                                        {it}
                                    </a>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}