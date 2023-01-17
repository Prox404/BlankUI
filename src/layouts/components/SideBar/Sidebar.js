import { RiDashboardFill } from "react-icons/ri";
import { FaLink } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { AiFillBook } from "react-icons/ai";

import SidebarItem from "~/components/SidebarItem";

const content = [
    {
        title: "Dashboard",
        to: "/",
        icon: <RiDashboardFill />,
    },
    {
        title: "Link",
        to: "/links",
        icon: <FaLink />,
    },
    {
        title: "Contact",
        to: "/contact",
        icon: <AiFillBook />,
    },
    {
        title: "About",
        to: "/about",
        icon: <MdInfo />,
    }
]

function Sidebar() {
    return (<>
        <div className="
        h-full 
        w-full 
        flex 
        flex-col 
        justify-between
        md:justify-center
        md:flex-row
        ">
            <div className="
            md:flex 
            md:flex-row 
            ">

                {
                    content.map((item, index) => {
                        return (
                            <SidebarItem key={index} {...item} />
                        )
                    })
                }
            </div>
            <div className="
                flex 
                flex-row 
                items-center 
                justify-start
                pt-[10px]
                border-t-2
                border-slate-200
                lg:justify-center
                md:pt-0
                md:border-t-0
                md:flex-col
                
            ">
                <div className="
                flex 
                justify-center
                min-w-[50px]
                ">
                    <img className="
                    w-[30px]
                    h-[30px]
                    rounded-full
                    " src="https://i.ibb.co/176z8y8/Prox-logo-white.png" alt="profile" />
                </div>
                <div className="
                text-base 
                font-bold 
                whitespace-no-wrap
                lg:hidden
                md:block
                md:text-xs
                md:text-[var(--colorTextTertiary)]
                md:mt-[2px]
                ">
                    <span className="">Prox</span>
                </div>
            </div>
        </div>
    </>);
}

export default Sidebar;