import { Outlet } from "react-router-dom";
import Styler from "../style";
const App = () => {
  return (
    <Styler>
      <header className="py-1rem max-md:px-1rem md:px-2rem sticky">
        <h1 className="text-base font-medium">tenoxui/css</h1>
        <nav className=""></nav>
      </header>
      <main className="w-mx-1440px h-mn-100vh mx-auto">
        <Outlet />
      </main>
      <footer className=""></footer>
    </Styler>
  );
};

export default App;
