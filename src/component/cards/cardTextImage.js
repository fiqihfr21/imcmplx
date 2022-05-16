export const CardTextImage = ({image, title, category, author}) => {
    return (
        <div className="max-w-full min-h-fit overflow-hidden bg-[#111111] border border-[#1C1C1C] mb-4 break-inside-avoid-column">
            <img className="w-full" src={image} alt="image-1"/>
            <div className={"px-6 py-8"}>
                <div className="">
                    <div
                        className="font-bebas font-bold text-white text-4xl text-center tracking-wider leading-10 mb-2">{title}</div>
                    <div className={"flex justify-center"}>
                        {category.map((item, index) => {
                            if (index !== category.length - 1) {
                                return <p
                                    className="text-[#7A7A7A] text-base after:content-['/'] after:inline after:px-5">{item}</p>;
                            }
                            return <p className="text-[#7A7A7A] text-base">{item}</p>;
                        })}
                    </div>
                </div>
                <div className="pt-8">
                    <p className="text-[#7A7A7A] text-base text-center">{author}</p>
                </div>
            </div>
        </div>
    )
}
