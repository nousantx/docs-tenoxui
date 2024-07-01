import { useState, useEffect, useLayoutEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { styler } from "@styler";
import Breadcrumbs from "@component/breadcrumbs";
import DocLink from "@component/docs-navigation";
import SidebarContent from "@component/sidebar-content";
import { generateTitle } from "../../utils/get-title";

const Layout = () => {
  const [sidebar, setSidebar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const title = generateTitle(location.pathname);
    document.title = title;
  }, [location]);

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
    <>
      <Helmet>
        <title>{generateTitle(location.pathname)}</title>
        <meta name="description" content="A utility-first CSS framework." />
        {/* Add more meta tags as needed */}
      </Helmet>
      <article className="relative d-flex max-xl:fd-column xl:fd-row">
        <header className="max-xl:flex-grow-0 xl:flrx-grow-1 flex-shrink-1 flex-basis-15% position-sticky max-md:h-auto md:h-100vh t-0 p-2rem max-xl:py-1rem xl:py-2rem z-999 bg-neutral-900 bg-opacity-0.2 backdrop-[blur(3.7px)] bw-1px bw-bottom-0 bs-solid border-neutral-500 border-opacity-0.3 max-md:bw-right-0 bw-left-0 md:bw-right-1px">
          <button onClick={toggleSidebar} className="max-xl:d-block xl:d-none">
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
        <section className="flex-grow-1 flex-shrink-1 flex-basis-50% max-lg:p-1rem lg:p-2rem border bw-top-1px border-neutral-500 border-opacity-0.3">
          <header className="mb-2rem">
            <Breadcrumbs />
          </header>
          {/* Main Content */}
          <div className="flex jc-[space-between]">
            <article className="w-full docs-wrapper">
              <Outlet />
            </article>
          </div>
          <footer className="mt-3rem">
            <DocLink
              prev="/docs/classes/border"
              prevIcon="border_style"
              next="/docs/classes/border"
              nextIcon="border_style"
            />
          </footer>
        </section>
        <aside className="flex-grow-0 flex-shrink-1 flex-basis-15% position-sticky t-0 p-2rem h-100vh max-2xl:d-none 2xl:d-block bw-0 bw-left-1px bw-top-1px bs-solid border-neutral-500 border-opacity-0.3">
          Hello
        </aside>
      </article>
    </>
  );
};

export default Layout;
