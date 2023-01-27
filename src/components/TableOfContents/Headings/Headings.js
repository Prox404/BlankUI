const Headings = ({ headings, activeId, ...props }) => {
  console.log(headings);
  return (
    <div {...props}>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={heading.id === activeId ? "text-black dark:text-gray-100" : "text-gray-400 dark:text-gray-400"}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${heading.id}`).scrollIntoView({
                  behavior: "smooth"
                });
              }}
            >
              {heading.title}
            </a>
            {heading.items.length > 0 && (
              <ul>
                {heading.items.map((child, index) => (
                  <li
                    key={index}
                    className={child.id === activeId ? "text-black dark:text-gray-100" : "text-gray-700 dark:text-gray-400"}
                  >
                    <a
                      href={`#${child.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(`#${child.id}`).scrollIntoView({
                          behavior: "smooth"
                        });
                      }}
                    >
                      {child.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Headings;