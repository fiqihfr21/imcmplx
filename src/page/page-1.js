import header from '../assets/header.png';
import ornament1 from '../assets/ornament-1.png';

export const Page1 = () => {
    return (
        <>
            <div style={{ zIndex: '-1' }} className='absolute top-4 left-4'>
                <img src={ornament1} alt="ornament1" className="w-auto h-[calc(100vh_-_1rem)]" />
            </div>
            <div style={{ zIndex: '-1' }} className='absolute top-0 right-0'>
                <img src={header} alt="header" className="w-auto h-screen" />
            </div>
        </>
    )
}