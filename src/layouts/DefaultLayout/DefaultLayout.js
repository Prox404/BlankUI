import SideBar from "../components/SideBar";

function DefaultLayout({ children }) {
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
            border-r-2 
            border-slate-200
            lg:w-[var(--default-layout-sidebar-close-width)]
            lg:bottom-0
            md:w-full 
            md:h-auto
            md:border-r-0
            md:border-t-2
            ">
                <SideBar/>
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