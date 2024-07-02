import { NavLink } from "react-router-dom";
import { Links } from "./sidebar-links.ts";

const SidebarContent = () => {
  return (
    <>
      {Links.map((section, index) => (
        <div key={index} className="sidebar-content">
          <h4 className={`text-base tw-nowrap ${index > 0 ? "mt-1.3rem" : ""}`}>{section.title}</h4>
          {section.content.map((link, linkIndex) => (
            <NavLink key={linkIndex} to={`/docs${section.base}${link.route}`} className="nav-link">
              {link.name}
            </NavLink>
          ))}
        </div>
      ))}
    </>
  );
};

export default SidebarContent;
