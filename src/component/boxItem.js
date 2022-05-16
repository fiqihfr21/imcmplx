import btnClose from '../assets/btn-close.png';
import headerDetailOrnamen2 from '../assets/header-detail-ornament-2.png';
import sideDetailOrnament from '../assets/side-detail-ornament.png';
import footerDetailOrnament from '../assets/footer-detail-ornament.png';

export const BoxItem = (props) => {

    return (
        <div className={'flex flex-col w-[500px]'}>
            <img src={headerDetailOrnamen2} alt="item-header" className='w-auto h-auto' />

            <div className={'relative w-auto h-100'}>
                <div className={'static'}>
                    <div className={'absolute right-0 -top-7'} style={{ display: props.btnClose ? 'block' : 'none' }}>
                        <div className='ml-auto self-end mr-5'>
                            <img src={btnClose} alt="btn-close" className='w-auto h-14' />
                        </div>
                    </div>

                    <div className={'absolute -right-10 -top-10'}>
                        <div className='ml-auto self-end mr-5'>
                            <img src={sideDetailOrnament} alt="side-ornament" className='w-auto h-auto' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='ml-11 -mt-10 overflow-y-scroll max-h-[520px]'>
                {props.children}
            </div>

            <div className={'relative w-auto h-100'}>
                <div className={'absolute left-0 -bottom-10'}>
                    <div className='ml-auto self-end mr-5'>
                        <img src={footerDetailOrnament} alt="item-footer" className='w-auto h-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}