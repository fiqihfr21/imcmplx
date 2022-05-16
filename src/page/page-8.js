import dummyImage from "../assets/dummy-image-5.png";
import {Item} from "../component/item";

export const Page8 = () => {
    return (
        <div className={"flex flex-row container mx-auto justify-center px-40 py-12"}>
            <div className={""}>
                <img src={dummyImage} alt={"item-header"} className='w-3/4 h-auto'/>
            </div>
            <div className={""}>
                <Item title="Hades" ornameType='1' footerText={true}/>
            </div>
        </div>
    )
}
