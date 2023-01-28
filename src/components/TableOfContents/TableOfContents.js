import { useState } from "react";

import useHeadingsData from "~/hooks/useHeadingsData";
import useIntersectionObserver from "~/hooks/useIntersectionObserver";
import Headings from "./Headings";

function TableOfContents({ className, ...props }) {
    const [activeId, setActiveId] = useState();
    const [visible, setVisible] = useState(false);
    const { nestedHeadings } = useHeadingsData();
    useIntersectionObserver(setActiveId);

    const handleToggle = () => {
        setVisible(!visible);
    };

    return (
        <>
            <div {...props} className={`${className} px-[16px] pt-[60px] ease-out duration-500 fixed ${visible ?  'translate-x-0 bg-[#ffffff7d] backdrop-blur-[33px] bg-white' : 'translate-x-full '} w-auto right-0  top-[60px] h-full py-[16px] border-l-2   border-slate-100  dark:bg-slate-100`}>
                <Headings headings={nestedHeadings} activeId={activeId} />
            </div>
            <button onClick={() => handleToggle()} className="p-[10px] border-2 border-slate-100 rounded-md fixed right-[10px] top-[70px] bg-[#ffffff7d] backdrop-blur-[33px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </>

    );
}

export default TableOfContents;