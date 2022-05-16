import dummy1 from '../assets/image1.png';
import dummy2 from '../assets/product-image.png';
import dummy3 from '../assets/dummy-image-6.png';
import dummy4 from '../assets/dummy-image-7.png';
import dummy5 from '../assets/product-image-5.png';
import dummy6 from '../assets/product-image-6.png';
import dummy7 from '../assets/product-image-7.png';
import dummy9 from '../assets/product-image-9.png';
import dummy10 from '../assets/product-image-10.png';
import dummy11 from '../assets/product-image-11.png';
import dummy12 from '../assets/product-image-12.png';
import {Galleria} from "../component/galleria";

// page 4
export const Secondary = () => {
    const cardList1 = [
        {
            image: dummy1,
            url: '/secondary/page-5'
        },
        {
            image: dummy3,
            url: '/secondary/page-5'
        },
        {
            image: dummy4,
            url: '/secondary/page-5'
        },
    ];
    const cardList2 = [
        {
            image: dummy2,
        },
        {
            image: dummy5,
        },
        {
            image: dummy6,
        },
        {
            image: dummy7,
        },
        {
            image: dummy9,
        },
        {
            image: dummy10,
        },
    ];
    const cardList3 = [
        {
            image: dummy11,
        },
        {
            image: dummy12,
        },
        {
            image: dummy2,
        },
    ];

    return (
        <div className={"flex flex-col justify-center container mx-auto py-12 px-40"}>
            <Galleria title={"Single"} columns={2} cards={cardList1} />
            <Galleria title={"Series"} columns={3} cards={cardList2} />
            <Galleria title={"Collabs"} columns={3} cards={cardList3} />
        </div>
    )
}
