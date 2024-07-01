import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { styler } from "@styler";

const DocLink: React.FC<{
  edit?: string;
  prev?: string;
  next?: string;
  prevTitle?: string;
  nextTitle?: string;
  prevIcon?: string;
  nextIcon?: string;
  className?: string;
}> = ({ edit, prev, prevIcon, nextIcon, prevTitle, nextTitle, next, className }) => {
  const { pathname } = useLocation();

  const formattedPathname = pathname.startsWith("/") ? pathname.slice(1) : pathname;

  const githubEditLink = edit
    ? `https://github.com/nousantx/docs-tenoxui/tree/main/src/pages/${edit}`
    : `https://github.com/nousantx/docs-tenoxui/tree/main/src/pages/${formattedPathname}.mdx`;

  styler();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const generateLinkTitle = (link: string) => {
    const segments = link.split("/");
    const lastSegment = segments[segments.length - 1];
    const title = lastSegment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    return title;
  };

  return (
    <div className={`w-full mv-2rem ${className}`}>
      {/* Edit this page */}
      <div className="w-full flex mb-2rem">
        <a
          className="text-sm flex-center gap-6px tc-[--primary-500]"
          href={githubEditLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <span className="ms-sharp text-base">edit_square</span> */}
          Edit this page on <i className="ti ti-github_circle"></i>
        </a>
      </div>
      <div className="flex-center jc-[space-between] w-full">
        {/* Link to prev or next page */}
        {prev && (
          <Link
            to={prev}
            className={`doc-link-bottom flex ai-[flex-start] fd-column text-base pl-12px border bw-left-1px bc-[--primary-500] ${
              !next ? "mr-auto" : ""
            }`}
          >
            <p className="text-base flex-center gap-6px font-normal">
              <span className="ms-sharp fs-18px tc-[--primary-500]">{prevIcon || "chevron_left"}</span>
              {prevTitle || generateLinkTitle(prev)}
            </p>
            <p className="text-xs flex-center tc-[--neutral-500]">
              {/* <span className="ms-sharp text-xs">chevron_left</span> */}
              Previous Page
            </p>
          </Link>
        )}
        {next && (
          <Link
            to={next}
            className={`doc-link-bottom flex ai-[flex-end] fd-column text-base px-12px border bw-right-1px bc-[--primary-500] ${
              !prev ? "ml-auto" : ""
            }`}
          >
            <p className="text-base flex-center gap-6px font-normal">
              {nextTitle || generateLinkTitle(next)}
              <span className="ms-sharp fs-18px tc-[--primary-500]">{nextIcon || "chevron_right"}</span>
            </p>
            <p className="text-xs flex-center tc-[--neutral-500]">
              {/* <span className="ms-sharp text-xs">chevron_left</span> */}
              Next Page
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DocLink;
