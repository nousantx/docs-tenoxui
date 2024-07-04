import { styler } from "@styler";

const Fallback = () => {
  styler();
  return (
    <header className="flex-center fd-column h-mn-50vh">
      <h1 className="">404 | Not Found</h1>
      <p className="">Sometimes, it's hard to keep in track 🗿</p>
    </header>
  );
};

export default Fallback;
