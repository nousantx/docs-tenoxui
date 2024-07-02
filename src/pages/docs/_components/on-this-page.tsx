import { useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { styler } from "@styler";
import { toKebabCase } from "@/utils/kebab-case";

const OnThisPage = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const location = useLocation();

  const extractHeadingsWithIds = () => {
    const mainContent = document.querySelector(".docs-wrapper");
    if (!mainContent) return;
    const headingTags = mainContent.querySelectorAll("h1, h2, h3, h4");

    const extractedHeadings = Array.from(headingTags).map((heading) => {
      const text = (heading as HTMLElement).innerText;
      const id = toKebabCase(text);
      (heading as HTMLElement).id = id; // Assign the generated id to the heading

      return {
        text,
        id,
        level: parseInt((heading as HTMLElement).tagName.charAt(1)), // Type assertion to HTMLElement
      };
    });

    setHeadings(extractedHeadings);
  };
  styler(location.pathname);
  useLayoutEffect(() => {
    extractHeadingsWithIds();
  }, [location.pathname]);

  const renderOnThisPageSection = () => {
    if (headings.length === 0) {
      return (
        <>
          <p className="text-lg font-medium tc-[neutral-800]">
            Nothing to show
          </p>
        </>
      );
    } else {
      return (
        <>
          <p className="text-lg font-medium tc-[neutral-800]">On this page</p>
          <ul className="border list-none bw-left-2px bc-[neutral-400] pl-1rem pv-8px mt-0.5rem">
            {headings.map((heading, index) => (
              <li key={index} className="text-base font-light">
                <a href={`#${heading.id}`} className="tc-[neutral-700]">
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </>
      );
    }
  };

  return <>{renderOnThisPageSection()}</>;
};

export default OnThisPage;
