import {useEffect, useState} from 'react';

const useHeadingsData = () => {
    const [nestedHeadings, setNestedHeadings] = useState([]);

    const getNestedHeadings = (headingElements) => {
        console.log(headingElements);
        const nestedHeadings = [];
      
        headingElements.forEach((heading, index) => {
          const { innerText: title, id } = heading;
      
          if (heading.nodeName === "H2") {
            nestedHeadings.push({ id, title, items: [] });
          } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
            nestedHeadings[nestedHeadings.length - 1].items.push({
              id,
              title
            });
          }
        });
      
        return nestedHeadings;
      };
  
    useEffect(() => {
      const headingElements = Array.from(
        document.querySelectorAll("main h2,main h3")
      );

      console.log(headingElements);
  
      // Created a list of headings, with H3s nested
      const newNestedHeadings = getNestedHeadings(headingElements);
      setNestedHeadings(newNestedHeadings);
    }, []);
  
    return { nestedHeadings };
  };

export default useHeadingsData;