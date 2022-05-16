import dummy1 from '../../assets/image1.png';
import dummy2 from '../../assets/product-image.png';
import dummy3 from '../../assets/dummy-image-6.png';
import dummy4 from '../../assets/dummy-image-7.png';
import dummy5 from '../../assets/product-image-5.png';
import dummy6 from '../../assets/product-image-6.png';
import dummy7 from '../../assets/product-image-7.png';
import dummy9 from '../../assets/product-image-9.png';
import dummy10 from '../../assets/product-image-10.png';
import dummy11 from '../../assets/product-image-11.png';
import dummy12 from '../../assets/product-image-12.png';
import { Gallery } from './gallery';
import { DetailGallery } from './detailSecondary/detailGallery';

export const Secondary = () => {
    const cardList1 = [
        {
            image_url: dummy1,
            url: '/secondary/0x14d8BAA04Ee4587e700Fc1817561819415B2474A'
        },
        {
            image_url: dummy3,
            url: '/secondary/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D'
        },
        {
            image_url: dummy4,
            url: '/secondary/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'
        },
    ];
    const cardList2 = [
        {
            asset_contract: {address: '#'},
            image_url: dummy2,
            token_id: "1"
        },
        {
            asset_contract: {address: '#'},
            image_url: dummy5,
            token_id: "2"
        },
        {
            asset_contract: {address: '#'},
            image_url: dummy6,
            token_id: "3"
        },
        {
            asset_contract: {address: '#'},
            image_url: dummy7,
            token_id: "4"
        },
        {
            asset_contract: {address: '#'},
            image_url: dummy9,
            token_id: "5"
        },
        {
            asset_contract: {address: '#'},
            image_url: dummy10,
            token_id: "6"
        },
    ];
    const cardList3 = [
        {
            asset_contract: {address: '#'},
            image_url: dummy11,
            token_id: "7"
        },
        {
            asset_contract: {address: '#'},
            image_url: dummy12,
            token_id: "8"
        },
        {
            asset_contract: {address: '#'},
            image_url: dummy2,
            token_id: "10"
        },
    ];

    return (
        <div className={"flex flex-col justify-center container mx-auto py-12 px-40"}>
            <Gallery key={"Single"} title={"Single"} columns={2} cards={cardList1} />
            {/* <DetailGallery key={"Series"} title={"Series"} columns={3} cards={cardList2} />
            <DetailGallery key={"Collabs"} title={"Collabs"} columns={3} cards={cardList3} /> */}
        </div>
    )
}
