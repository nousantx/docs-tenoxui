import { useLayoutEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { makeStyles } from "tenoxui";
import Styler from "@style/index";
import { styler } from "@styler";

const Navbar = () => {
  const location = useLocation();
  styler();
  useLayoutEffect(() => {
    makeStyles({
      ".app--nav": "d-flex ai-center gap-1rem",
    });
  }, [location.pathname]);

  return (
    <header className="py-1rem max-md:px-1rem md:px-2rem sticky flex ai-center jc-[space-between]">
      <h1 className="text-base font-medium flex-center gap-6px">
        tenoxUI
        <span className="text-sm text-neutral-600">/</span>
        <span className="text-primary-500">CSS</span>
      </h1>
      <nav className="app--nav">
        <NavLink to="/" className="app--nav_link">
          Home
        </NavLink>
        <NavLink to="/docs" className="app--nav_link">
          Docs
        </NavLink>
      </nav>
    </header>
  );
};

const Footer = () => {
  styler();
  return (
    <footer className="p-2rem py-1.5rem w-mx-1440px mx-auto bw-0 bw-top-1px bs-solid border-neutral-500 border-opacity-0.3">
      <p className="text-xs text-neutral-400 family-poppins font-medium">
        &copy; 2024 NOuSantx. Built with{" "}
        <a
          href="https://tenoxui.web.app"
          className="td-l-underline hover:td-l-none td-c-[--primary-500] tr-time-200ms"
        >
          TenoxUI
        </a>
        .
      </p>
    </footer>
  );
};

const App = () => {
  styler();
  return (
    <Styler>
      <Navbar />
      <main className="w-mx-1440px h-mn-100vh mx-auto">
        <Outlet />
      </main>
      <Footer />
    </Styler>
  );
};

export default App;
