export const CardTextImageNoBg = ({image, title, desc, catalog = false}) => {
    return (
        <div className={`max-w-full min-h-fit overflow-hidden ${catalog ? 'mb-4' : ''}`}>
            <img className="w-full" src={image} alt={title}/>

            <div className={"py-2"}>
                <p className="font-bebas text-white font-semibold text-xl tracking-[.265rem]">{title}</p>
                <p className="font-bebas text-white font-semibold text-xl tracking-[.265rem]">{desc}</p>
            </div>
        </div>
    )
}
