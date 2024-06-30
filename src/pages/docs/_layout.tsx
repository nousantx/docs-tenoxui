import { useState, useLayoutEffect } from "react";
import {  NavLink, Outlet } from "react-router-dom";
import { styler } from "../../style/styler";
// import { makeStyle } from "tenoxui";

export const SidebarContent = () => {
  return (
    <>
      <h4 className="text-base tw-nowrap">Getting Started</h4>
      <NavLink to="/docs" className="nav-link">
        Why tenox
      </NavLink>
      <NavLink to="/" className="nav-link">
        Installation
      </NavLink>
      <NavLink to="/" className="nav-link">
        CLI Integration
      </NavLink>
      <h4 className="text-base mt-1.5rem">Yaiks</h4>
      <NavLink to="/" className="nav-link">
        Installation
      </NavLink>
    </>
  );
};

const Layout = () => {
  const [sidebar, setSidebar] = useState(true);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  const sidebarPosition = sidebar ? "l--100%" : "l-0";

  // re-apply the style when the sidebar's value is changed
  styler(sidebar);
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
    <article className="relative d-flex max-xl:fd-column xl:fd-row">
      <header className="max-xl:flex-grow-0 xl:flrx-grow-1 flex-shrink-1 flex-basis-15% position-sticky max-md:h-auto md:h-100vh t-0 p-2rem py-1rem z-999 bg-neutral-100 border-[1px\_solid\_var(--neutral-300)] max-md:bw-right-0 bw-left-0 md:bw-right-1px">
        <button onClick={toggleSidebar} className="max-xl:d-block xl:d-none">
          Menu
        </button>
        {/* Mobile sidebar */}
        <nav
          className={`position-fixed t-0 sidebar mobile-sidebar z-1000 tr-prop-[left] tr-time-150ms tr-timing-[ease-in-out] h-100vh bg-neutral-100 p-2rem max-xl:d-block xl:d-none ${sidebarPosition}`}
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
      <section className="flex-grow-1 flex-shrink-1 flex-basis-50% p-2rem">
        <header className="mb-2rem">header</header>
        {/* Main Content */}
        <div className="flex jc-[space-between]">
          <article className="w-full w-mx-800px h-200vh">
            <Outlet />
          </article>
        </div>
        <footer className="mt-3rem">footer</footer>
      </section>
      <aside className="flex-grow-0 flex-shrink-1 flex-basis-15% position-sticky t-0 p-2rem h-100vh max-2xl:d-none 2xl:d-block">
        Hello
      </aside>
    </article>
  );
};

export default Layout;
