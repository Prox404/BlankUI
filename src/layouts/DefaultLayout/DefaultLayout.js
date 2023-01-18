import SideBar from "../components/SideBar";

import { RiDashboardFill } from "react-icons/ri";
import { FaLink } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { AiFillBook } from "react-icons/ai";

function DefaultLayout({ children }) {
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
            hasSubChild: [
                {
                    title: "Sub child title",
                    to: "/abc",
                },
                {
                    title: "Sub child title 2",
                    to: "/abc",
                },
                {
                    title: "Sub child title 3",
                    to: "/abc",
                },
                {
                    title: "Sub child title 4",
                    to: "/abc",
                }
            ]
        }
    ]

    return ( <>
        <div className="min-h-screen">
            <div className="
            px-[10px] 
            py-[14px] 
            m-0 fixed 
            h-full z-30 
            ease-out 
            duration-300 
            w-[var(--default-layout-sidebar-width)] 
            border-r-4 
            border-slate-100
            lg:w-[var(--default-layout-sidebar-close-width)]
            lg:bottom-0
            md:w-full 
            md:h-auto
            md:border-r-0
            md:border-t-4
            ">
                <SideBar data={content}/>
            </div>
            <div className="
            p-[16px] 
            ml-[var(--default-layout-sidebar-width)]
            lg:ml-[var(--default-layout-sidebar-close-width)]
            md:ml-0
            md:mb-[var(--default-layout-header-height)]
            ">
                {children}
            </div>
        </div>
    </> );
}

export default DefaultLayout;