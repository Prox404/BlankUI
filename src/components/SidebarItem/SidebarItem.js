
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

import Menu from "~/components/Popper/Menu";

const SidebarItem = forwardRef((
    {
        icon,
        className,
        title,
        to,
        hasSubChild = [],
        onClick,
        active = false,
        ...props
    }, ref
) => {
    return (<div
        className="
        group
    ">
        <Menu className="z-40 2xl:hidden lg:block sm:hidden" placement="right" items={hasSubChild && hasSubChild}>
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
            font-semibold 
            whitespace-no-wrap
            lg:hidden
            md:block
            md:text-xs
            md:text-[var(--colorTextTertiary)]
            ">
                    <span className="">{title}</span>
                </div>
            </Link>
        </Menu>
        <div className="
            [&>a:last-child>div:first-child>div]:h-1/2
            [&>a:last-child>div:first-child]:items-start
            lg:hidden
        ">
            {
                hasSubChild && hasSubChild.map((child, index) => {

                    return <Link to={child.to && child.to}
                        className="
                    flex 
                    w-full 
                    h-10 
                    items-center 
                    cursor-pointer 
                    rounded-md
                ">
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
                            <div className="
                        w-[2px]
                        h-full
                        bg-slate-300
                    "></div>
                        </div>
                        <div className="
                    ml-2
                    text-base 
                    font-semibold 
                    text-[var(--colorTextSecondary)]
                    whitespace-no-wrap
                    transition-all
                    lg:w-max
                    md:block
                    md:text-xs
                ">
                            {child.title}
                        </div>
                    </Link>
                })
            }
        </div>
    </div>);
});

export default SidebarItem;