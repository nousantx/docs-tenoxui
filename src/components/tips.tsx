import React, { ReactNode } from "react";
import { styler } from "@styler";

interface TipProps {
  variant?: "danger" | "info" | "warning" | "tip";
  title?: string;
  children?: ReactNode;
  className?: string;
}

const Tip: React.FC<TipProps> = ({ variant = "tip", children, className, title }) => {
  styler();
  let bgColor = "bg-blue-200";
  let icon = "info";
  let vaColor = "blue-500";
  switch (variant) {
    case "danger":
      bgColor = "bg-red-200";
      icon = "dangerous";
      vaColor = "red-500";
      break;
    case "warning":
      bgColor = "bg-amber-200";
      icon = "warning";
      vaColor = "amber-500";
      break;
    case "tip":
      bgColor = "bg-lime-200";
      icon = "emoji_objects";
      vaColor = "lime-500";
      break;
    case "info":
    default:
      bgColor = "bg-blue-200";
      icon = "info";
      vaColor = "info-500";
      break;
  }

  return (
    <div
      className={`tip-wrapper ${bgColor} bg-opacity-0.15 bs-solid bw-0 bw-left-2px bc-[--${vaColor}] my-2rem p-14px ph-1.25rem td-c-[--${vaColor}] ${className}`}
    >
      {variant ? (
        <p className={`variant flex ai-center text-sm gap-0.35rem tc-[--${vaColor}] tn-uppercase fw-500`}>
          <span className="ms-sharp fs-18px">{icon}</span>
          {/* {title ? title : variant.charAt(0).toUpperCase() + variant.slice(1)} */}
          {title ? title : <span className="">{variant}</span>}
        </p>
      ) : null}
      {children}
    </div>
  );
};

export default Tip;
