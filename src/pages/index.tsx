import { Link } from "react-router-dom";
import { styler } from "@styler";

const Home = () => {
  styler();
  return (
    <>
      <article className="p-2rem flex-center">
        <header className="tw-balance w-full d-flex jc-center flex-wrap-wrap ai-center bg-amber-100">
          <div className="flex-[1\_1\_500px] bg-blue-100">
            <h1 className="w-mx-600px">A CSS Framework Without CSS File!</h1>
            <p className="mt-1.2rem text-base">
              A utility-first CSS framework, styles handled in javascript, and applied through{" "}
              <code>inline-styles</code>. Less than <code className="">5kb</code> and it
            </p>
            <Link to="/docs" className="btn">Docs</Link>
          </div>
          <div className="flex-[1\_1\_500px] p-2rem bg-red-100"></div>
        </header>
      </article>
    </>
  );
};

export default Home;
