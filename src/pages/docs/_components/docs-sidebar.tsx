import { useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { styler } from "@styler";
import SidebarContent from "./sidebar-content";

const DocsSidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const location = useLocation();

  

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  const sidebarPosition = sidebar ? "l--100%" : "l-0";
  styler(sidebar);

  // re-apply the style when the sidebar's value is changed
  useLayoutEffect(() => {
    // handle outside click
    const handleOutsideClick = (event: MouseEvent) => {
      const sidebarElement = document.getElementById("mobile-sidebar");
      if (sidebarElement && !sidebarElement.contains(event.target as Node)) {
        setSidebar(false);
      }
    };

    if (sidebar) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [sidebar]);

  return (
    <header className="max-xl:flex-grow-0 xl:flrx-grow-1 flex-shrink-1 flex-basis-15% position-sticky max-md:h-auto md:h-100vh t-0 max-xl:py-1rem xl:py-2rem max-md:px-1rem md:px-2rem z-999 bg-neutral-900 backdrop-[blur(3.7px)] bw-1px bw-bottom-0 bs-solid border-neutral-500 border-opacity-0.3 max-md:bw-right-0 bw-left-0 md:bw-right-1px">
      <button
        onClick={toggleSidebar}
        className="btn max-xl:d-flex xl:d-none gap-6px tc-$neutral-500 family-inherit flex-parent-center hover:tc-$neutral-200 tr-prop-color tr-time-0.3s"
      >
        <span className="ms-sharp text-base">menu</span>
        Menu
      </button>
      {/* Mobile sidebar */}
      <nav
        className={`position-fixed t-0 sidebar mobile-sidebar z-1000 tr-prop-[left] tr-time-150ms tr-timing-[ease-in-out] h-100vh bg-neutral-900 p-2rem max-xl:d-block xl:d-none bg-opacity-1 ${sidebarPosition}`}
      >
        <SidebarContent />
      </nav>
      {!sidebar && (
        <div
          className="bg-#1d1d1d opa-0.8 w-full z-999 fixed h-100vh w-100vw t-0 l-0 tr-0.3s"
          onClick={toggleSidebar}
        ></div>
      )}
      <nav className="position-relative max-xl:d-none xl:d-block sidebar">
        <SidebarContent />
      </nav>
    </header>
  );
};

export default DocsSidebar;
