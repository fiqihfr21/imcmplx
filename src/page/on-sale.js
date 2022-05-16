import { Link } from "react-router-dom";
import { ItemWithImage } from "../component/itemWithImage";

// page 15
export const OnSale = () => {
    return (
        <div className={"flex flex-col container mx-auto justify-center p-12"}>
            <div className="p-9 self-center">
                <ItemWithImage header={false} title={'The Lost Stone'} margin={false} link='/on-sale/mint' />
                {/* <ItemWithImage header={false} margin={false} title='TOM LOST' link='/on-sale/page-8' />
                <ItemWithImage header={false} margin={false} title='COMPONENT 3' link='/on-sale/page-10' /> */}
            </div>
        </div>
    )
}
