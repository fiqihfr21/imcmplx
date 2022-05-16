import {CardTextImage} from "./cardTextImage";
import {CardText} from "./cardText";
import {CardImage} from "./cardImage";
import {CardTextImageNoBg} from "./cardTextImageNoBg";

export const Cards = ({asset, image_url, title, desc, category, author, catalog}) => {

    // if (!image_url) return <CardText title={title}/>;

    if (image_url && !title && !category && !author) return <CardImage image={image_url}/>

    // if (catalog) return <CardTextImageNoBg image={image_url} title={title} desc={desc} catalog={catalog}/>

    return <CardImage image={asset.image}/>
    // if (image && !title && !category && !author) return <CardImage image=""/>

    // if (catalog) return <CardTextImageNoBg image={image} title={title} desc={desc} catalog={catalog}/>

    return <CardTextImage image="" title="" category="" author=""/>;
}
