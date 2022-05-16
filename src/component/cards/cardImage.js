export const CardImage = ({image}) => {
    return (
        <div className="max-w-full min-h-fit overflow-hidden bg-[#111111] border border-[#1C1C1C] mb-4 break-inside-avoid-column">
            <img className="w-full" src={image} alt="image-1"/>
        </div>
    )
}
