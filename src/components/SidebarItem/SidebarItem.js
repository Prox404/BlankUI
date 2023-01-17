
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

const SidebarItem = forwardRef((
    {
        icon,
        className, 
        title,
        to,
        onClick, 
        active = false,
        ...props
    }, ref
    ) => {

        const classes = {
            [className]: className,
            active
        };
    return ( <>
        <Link ref={ref} className={[`
            flex 
            w-full 
            h-12 
            items-center 
            mt-[10px] 
            cursor-pointer 
            rounded-md
            hover:bg-slate-100
            lg:justify-center
            md:w-auto 
            md:flex-col
            md:mt-0
        `, className]} to={to} onClick={onClick}>
            <div className="
                rounded-md 
                h-full 
                flex 
                items-center 
                justify-center 
                text-xl
                min-w-[50px]
                md:mt-0

            ">
                {icon}
            </div>
            <div className="
            text-base 
            font-bold 
            whitespace-no-wrap
            lg:hidden
            md:block
            md:text-xs
            md:text-[var(--colorTextTertiary)]
            ">
                <span className="">{title}</span>
            </div>
        </Link>
    </> );
});

export default  SidebarItem;