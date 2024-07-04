import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { styler } from "@styler";
import Breadcrumbs from "@component/breadcrumbs";
import OnThisPage from "./_components/on-this-page";
import DocsSidebar from "./_components/docs-sidebar";
import { generateTitle } from "@/utils/get-title";

const Layout = () => {
  const location = useLocation();
  styler();

  useEffect(() => {
    const title = generateTitle(location.pathname);
    document.title = title;
  }, [location]);

  return (
    <>
      <Helmet>
        <title>{generateTitle(location.pathname)}</title>
        <meta name="description" content="A utility-first CSS framework." />
        {/* Add more meta tags as needed */}
      </Helmet>
      <article className="relative d-flex max-xl:fd-column xl:fd-row">
        <DocsSidebar />
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
        </section>
        <aside className="flex-grow-0 flex-shrink-1 flex-basis-15% position-sticky t-0 p-2rem h-100vh max-2xl:d-none 2xl:d-block bw-0 bw-left-1px bw-top-1px bs-solid border-neutral-500 border-opacity-0.3">
          <OnThisPage />
        </aside>
      </article>
    </>
  );
};

export default Layout;
