import { BsCircleHalf } from "react-icons/bs";

import SidebarItem from "~/components/SidebarItem";

function Sidebar( {
    data = [],
    ...props
} ) {
    return (<>
        <div className="
        h-full 
        w-full 
        flex 
        flex-col 
        justify-between
        bg-[var(--colorBGPrimary)]
        md:justify-center
        md:flex-row
        ">
            <div className="
            md:flex 
            md:flex-row 
            ">

                <div className="
                    flex 
                    w-full 
                    h-12 
                    items-center 
                    mt-[10px] 
                    cursor-pointer 
                    rounded-md
                    lg:justify-center
                    md:hidden
                    "
                >
                    <div className="
                        rounded-md 
                        h-full 
                        flex 
                        items-center 
                        justify-center 
                        text-2xl
                        min-w-[50px]
                        md:mt-0
            
                    ">
                        <BsCircleHalf />
                    </div>
                    <div className="
                        text-2xl 
                        font-semibold 
                        whitespace-no-wrap
                        lg:hidden
                    ">
                        <span className="">BlankUI</span>
                    </div>
                </div>
                <form className="
                mt-3
                    lg:hidden
                ">
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" 
                            className="
                            block 
                            w-full
                            p-[5px]
                            pl-10
                            text-sm
                            text-[var(--colorTextPrimary)]
                            border-2
                            border-slate-200
                            rounded-lg
                            bg-[var(--colorBGPrimary)]
                            focus:ring-slate-400
                            focus:border-slate-400
                            placeholder:text-gray-500
                            outline-none
                            " placeholder="Search..." required/>
                    </div>
                </form>
                {
                    data.map((item, index) => {
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
                py-[5px]
                border
                border-slate-200
                rounded-md
                lg:justify-center
                md:py-0
                lg:border-0
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
                font-semibold 
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