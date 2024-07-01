import { NavLink } from "react-router-dom";
import { styler } from "@styler";

const Links = [
  {
    title: "Getting Started",
    content: [
      { name: "Overview", route: "/docs/overview" },
      { name: "Content", route: "/docs/content" },
      { name: "Installation", route: "/docs/installation" }
    ]
  },
  {
    title: "Content",
    content: [
      { name: "Flexbox", route: "/docs/classes/flexbox" },
      { name: "Grid", route: "/docs/classes/grid" }
    ]
  },
  {
    title: "Content",
    content: [
      { name: "Flexbox", route: "/docs/classes/flexbox" },
      { name: "Grid", route: "/docs/classes/grid" }
    ]
  }
];

const SidebarContent = () => {
  styler();

  return (
    <>
      {Links.map((section, index) => (
        <div key={index} className="sidebar-content">
          <h4 className={`text-base tw-nowrap ${index > 0 ? "mt-1.3rem" : ""}`}>{section.title}</h4>
          {section.content.map((link, linkIndex) => (
            <NavLink key={linkIndex} to={link.route} className="nav-link">
              {link.name}
            </NavLink>
          ))}
        </div>
      ))}
    </>
  );
};

export default SidebarContent;
