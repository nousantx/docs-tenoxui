import { Outlet } from "react-router-dom";
import Styler from "../style";

const Navbar = () => {
  return (
    <header className="py-1rem max-md:px-1rem md:px-2rem sticky flex ai-center jc-[space-between]">
      <h1 className="text-base font-medium flex-center gap-6px">
        tenoxUI
        <span className="text-sm text-neutral-600">/</span>
        <span className="text-primary-500">CSS</span>
      </h1>
      <nav className=""></nav>
    </header>
  );
};

const Footer = () => {
  return <footer className="">Global Footer</footer>;
};

const App = () => {
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
