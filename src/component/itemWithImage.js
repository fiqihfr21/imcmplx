import { Item } from './item';
import itemHeader from '../assets/item-header.png';
import btnClose from '../assets/btn-close.png';
import image1 from '../assets/image1.png';
import Modal from 'react-modal/lib/components/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ItemWithImage = ({ header = true, margin = true, title, link }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div className={`flex items-start ${!margin ? 'mb-24' : ''}`}>
            <div className='flex flex-col space-y-4 items-center'>
                {header && <img src={itemHeader} alt="item-header" className='w-auto h-auto px-8' />}
                <Link to={link}>
                    <img src={image1} alt="item-img" onClick={openModal} className='w-auto h-auto cursor-pointer ' />
                </Link>
            </div>
            <div className={`ml-20 ${margin && 'mt-14'}`}>
                <Item title={title} />
            </div>

            <Modal
                isOpen={modalIsOpen}
                contentLabel="Minimal Modal Example"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        padding: '50px',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'transparent',
                        overflow: 'hidden',
                        border: 'none',
                    },
                }}
            >
                <div className='relative'>
                    <img src={btnClose} alt="close-btn" className='absolute -right-7 -top-7 cursor-pointer h-auto w-11' onClick={closeModal} />
                    <img src={image1} alt="item-dummy" className='w-auto h-[80vh]' />
                </div>
            </Modal>
        </div>
    )
}
