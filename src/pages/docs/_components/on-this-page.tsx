import { useState, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { styler } from "@styler";
import { toKebabCase } from "@/utils/kebab-case";

interface Heading {
  text: string;
  id: string;
  level: number;
}

const OnThisPage = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const location = useLocation();

  const extractHeadingsWithIds = () => {
    const mainContent = document.querySelector(".docs-wrapper");
    if (!mainContent) return;
    const headingTags = mainContent.querySelectorAll("h1, h2, h3, h4");

    const extractedHeadings = Array.from(headingTags).map(heading => {
      const text = (heading as HTMLElement).innerText;
      const id = toKebabCase(text);
      (heading as HTMLElement).id = id; // Assign the generated id to the heading

      return {
        text,
        id,
        level: parseInt((heading as HTMLElement).tagName.charAt(1)) // Type assertion to HTMLElement
      };
    });

    setHeadings(extractedHeadings);
  };

  useLayoutEffect(() => {
    extractHeadingsWithIds();
  }, [location.pathname]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });

    const headingElements = document.querySelectorAll("h1, h2, h3, h4");
    headingElements.forEach(heading => observer.observe(heading));

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  styler(location.pathname, activeId);

  const renderOnThisPageSection = () => {
    if (headings.length === 0) {
      return (
        <>
          <p className="text-lg font-medium tc-[--neutral-800]">Nothing to show</p>
        </>
      );
    } else {
      return (
        <>
          <p className="text-lg font-medium tc-[neutral-800]">On this page</p>
          <ul className="li-s-none bw-left-2px pl-1rem py-8px mt-0.5rem">
            {headings.map((heading, index) => (
              <li
                key={index}
                className={`text-base font-light ${activeId === heading.id ? "text-primary-500" : "text-neutral-300"}`}
              >
                <a href={`#${heading.id}`} className="tc-inherit">
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
