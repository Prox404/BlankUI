import { useState } from "react";

import {useHeadingsData} from "~/hooks";
import {useIntersectionObserver} from "~/hooks";
import Headings from "./Headings";

function TableOfContents() {
    const [activeId, setActiveId] = useState();
    const { nestedHeadings } = useHeadingsData();
    useIntersectionObserver(setActiveId);

    return (
        <nav aria-label="Table of contents">
            <Headings headings={nestedHeadings} activeId={activeId} />
        </nav>
    );
}

export default TableOfContents;