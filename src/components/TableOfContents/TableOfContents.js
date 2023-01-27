import { useState } from "react";

import useHeadingsData from "~/hooks/useHeadingsData";
import useIntersectionObserver from "~/hooks/useIntersectionObserver";
import Headings from "./Headings";

function TableOfContents({...props}) {
    const [activeId, setActiveId] = useState();
    const { nestedHeadings } = useHeadingsData();
    useIntersectionObserver(setActiveId);

    return (
        <nav aria-label="Table of contents">
            <Headings headings={nestedHeadings} activeId={activeId} {...props}/>
        </nav>
    );
}

export default TableOfContents;