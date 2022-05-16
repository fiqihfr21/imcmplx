import dummy1 from '../assets/product-image.png';
import dummy2 from '../assets/product-image-2.png';
import dummy3 from '../assets/product-image-3.png';
import dummy4 from '../assets/product-image-4.png';
import dummy5 from '../assets/product-image-5.png';
import dummy6 from '../assets/product-image-6.png';
import dummy7 from '../assets/product-image-7.png';
import dummy9 from '../assets/product-image-9.png';
import dummy10 from '../assets/product-image-10.png';
import dummy11 from '../assets/product-image-11.png';
import dummy12 from '../assets/product-image-12.png';
import {Galleria} from "../component/galleria";

export const Page5 = () => {

    const cardList1 = [
        {
            image: dummy1,
            url: '/secondary/page-6'
        },
        {
            image: dummy2,
            url: '/secondary/page-6'
        },
        {
            image: dummy3,
            url: '/secondary/page-6'
        },
        {
            image: dummy4,
            url: '/secondary/page-6'
        },
        {
            image: dummy5,
            url: '/secondary/page-6'
        },
        {
            image: dummy6,
            url: '/secondary/page-6'
        },
        {
            image: dummy7,
            url: '/secondary/page-6'
        },
        {
            image: dummy1,
            url: '/secondary/page-6'
        },
        {
            image: dummy9,
            url: '/secondary/page-6'
        },
        {
            image: dummy10,
            url: '/secondary/page-6'
        },
        {
            image: dummy11,
            url: '/secondary/page-6'
        },
        {
            image: dummy12,
            url: '/secondary/page-6'
        },
    ];

    return (
        <div className={"flex flex-col justify-center container mx-auto py-12 px-40"}>
            <Galleria title={"CMPLX BOREDH APE"} columns={3} cards={cardList1} />
        </div>
    )
}
