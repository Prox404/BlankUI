import { Link } from "react-router-dom";

function Card({
    to,
    href,
    onClick,
    imageCard = '',
    withoutPadding = false,
    horizontalCard = false,
    hoverEffect = false,
    children,
    className,
    ...passProps
}) {
    let Comp = 'div';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    console.log(imageCard.length > 0 || withoutPadding);
    console.log('imageCard',imageCard.length );
    console.log('withoutPadding',withoutPadding);

    return (<>
        <Comp to={to} className={`${horizontalCard ? 'flex flex-row' : 'block'} ${(imageCard.length > 0 || withoutPadding) ?  '' : 'p-6' } bg-[var(--colorBGPrimary)] border border-gray-200 rounded-lg ${hoverEffect ? 'hover:bg-gray-100' : ''} ${className} overflow-hidden` }>
            {
                imageCard && <div>
                    <img className={`${horizontalCard ? 'h-full w-auto rounded-l-lg' : 'w-full h-52 rounded-t-lg'} object-cover `} src={imageCard} alt="avatar" />
                </div>
            }
            <div className={`${imageCard ? 'p-6' : ''}`}>
                {children}
            </div>
        </Comp>
        {/* 
            Lorem ipsum is simply dummy text with a white background. The background color is white and the text is black.       
         */}
    </>);
}

export default Card;