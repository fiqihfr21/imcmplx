import { Link } from "react-router-dom";
import productHeader from "../../assets/header-product.png";
import { Cards } from "../../component/cards";

export const Gallery = ({ title, cards, columns }) => {
    const columnStyles = {
        1: 'columns-1',
        2: 'columns-2',
        3: 'columns-3',
        4: 'columns-4',
        5: 'columns-5',
        6: 'columns-6',
    }

    return (
        <div className={"flex flex-col justify-center mb-32"}>
            {title && <h1 className="font-bebas text-4xl text-[#ffffff] font-thin tracking-[.2em] ml-12">{title}</h1>}

            <div className={'relative w-auto h-100'}>
                <div className={'static'}>
                    <div className={'absolute left-0 top-0'}>
                        <img src={productHeader} alt="item-header" className='w-64 h-24' />
                    </div>
                </div>
            </div>

            <div className={`ml-12 mt-12 ${columnStyles[columns]}`}>
                {cards.map((card) => {
                    return (
                        <Link key={card.url} to={card.url}>
                            <Cards key={card.url} {...card} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
