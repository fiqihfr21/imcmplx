export const CardText = ({title}) => {
    return (
        <div className="max-w-full min-h-fit overflow-hidden bg-[#111111] border border-[#1C1C1C] mb-4 break-inside-avoid-column">
            <div className={"p-10"}>
                <div className="font-bebas font-medium text-white text-4xl text-center tracking-wider leading-10 mb-2">{title}</div>
            </div>
        </div>
    )
}
