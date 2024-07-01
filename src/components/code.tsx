import React, { ReactNode, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { styler } from "@styler";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import javascript from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import typescript from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import shell from "react-syntax-highlighter/dist/esm/languages/hljs/shell";
import bash from "react-syntax-highlighter/dist/esm/languages/hljs/bash";
import htmlbars from "react-syntax-highlighter/dist/esm/languages/hljs/htmlbars";
import html from "react-syntax-highlighter/dist/esm/languages/hljs/htmlbars";
import xml from "react-syntax-highlighter/dist/esm/languages/hljs/xml";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";

SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("shell", shell);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("htmlbars", htmlbars);
SyntaxHighlighter.registerLanguage("html", html);
SyntaxHighlighter.registerLanguage("xml", xml);
SyntaxHighlighter.registerLanguage("css", css);

interface Code {
  title?: string;
  lang: string;
  className?: string;
  linesToHighlight?: number[];
  startingLineNumber?: number;
  codeOnly?: boolean;
  showNumber?: boolean;
  isWrap?: boolean;
  children: string | ReactNode;
}

const Code: React.FC<Code> = ({
  title,
  lang,
  children,
  codeOnly,
  linesToHighlight = [],
  startingLineNumber = 1,
  showNumber,
  isWrap,
  className
}) => {
  const [copy, setCopy] = useState(false);
  const codeString = React.Children.toArray(children).join("");
  styler(copy);
  return (
    <div className={`w-full relative ${className}`}>
      {/* {copy && ( */}
      <div
        className={`position-fixed t-2rem r--100% bg-neutral-800 text-neutral-100 ta-center br-4px p-8px px-1rem z-9999 d-flex flex-parent-center gap-8px tr-prop-all tr-time-0.3s tr-timing-ease z-9999 ${
          copy ? "opa-1 r-1rem" : "opa-0 r--100%"
        }`}
      >
        <span className="ms-sharp text-primary-500 text-lg">inventory</span>
        Code copied successfully!
      </div>
      {!codeOnly ? (
        <div className={`w-full flex jc-[space-between] items-center bg-neutral-800 p-10px radius-top-4px`}>
          <p className="text-sm font-medium flex flex-parent-center gap-6px">
            <span className="ms-sharp text-base text-primary-500">draft</span>
            {title || lang}
          </p>
          {copy ? (
            <button className="btn flex flex-parent-center gap-6px text-neutral-200">
              <span className="ms-sharp fs-16px">done</span> <p className="text-sm font-medium">Copied</p>
            </button>
          ) : (
            <button
              className="btn flex flex-parent-center gap-6px text-neutral-200"
              onClick={() => {
                const textarea = document.createElement("textarea");
                textarea.value = codeString;
                textarea.setAttribute("readonly", "");
                textarea.style.position = "absolute";
                textarea.style.left = "-9999px";
                document.body.appendChild(textarea);

                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);

                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              }}
            >
              <span className="ms-sharp fs-16px">content_copy</span> <p className="text-sm font-medium">Copy</p>
            </button>
          )}
        </div>
      ) : null}
      <SyntaxHighlighter
        showLineNumbers={showNumber}
        startingLineNumber={startingLineNumber}
        wrapLongLines={isWrap}
        language={lang}
        className={`hljs p-14px relative lh-1.6 ${codeOnly ? "br-0.225rem" : "radius-bottom-0.225rem"} `}
        lineProps={(lineNumber: number) => {
          const style: React.CSSProperties = { display: "block", width: "fit-content" };
          if (linesToHighlight.includes(lineNumber)) {
            style.backgroundColor = "rgb(var(--tx_neutral-400) / 0.4)";
          }
          return { style };
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
