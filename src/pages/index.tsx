import React from "react";
import { Link } from "react-router-dom";
import { styler } from "@styler";

const Feature: React.FC<{
  icon: string;
  title: string;
  desc: string;
}> = ({ icon, title, desc }) => {
  return (
    <div className="flex-[1\_1\_250px] p-1.5rem rounded-md bg-neutral-800 bg-opacity-0.5 flex fd-column">
      <div className="box-45px flex-center bg-neutral-600 bg-opacity-0.3 rounded">
        <span className="ms-sharp text-2xl text-primary-500">{icon}</span>
      </div>
      <header className="mt-1.5rem">
        <h2 className="text-base lh-1">{title}</h2>
        <p className="text-sm mt-12px ta-left">{desc}</p>
      </header>
    </div>
  );
};

const Home = () => {
  styler();
  return (
    <>
      <article className="p-2rem max-lg:pt-4rem lg:pt-2rem d-flex fd-column ai-center gap-100px">
        <header className="ta-center relative max-lg:pt-0 lg:pt-4rem">
          <div className="box-200px bg-primary-500 absolute r--1rem t--3rem br-50% z--20 bg-opacity-0.2 blur-50px"></div>
          <h1 className="tw-balance">A CSS framework without CSS file!</h1>
          <p className="mt-1.2rem text-base w-mx-600px tw-balance">
            A utility-first CSS framework, styles handled in javascript, and applied through <code>inline-styles</code>.
            Less than <code className="primary">5kb</code>!
          </p>

          <div className="flex-center gap-1rem mt-2rem">
            <Link to="/docs" className="btn flex-center text-neutral-900 bg-$primary-500 hover:bg-$primary-600">
              Get Started
            </Link>
            <a href="https://github.com/tenoxui/css" className="btn flex-center text-neutral-900 bg-neutral-100">
              GitHub
            </a>
          </div>
        </header>
        <section className="w-full flex jc-center flex-wrap-wrap gap-1rem">
          <Feature
            icon="bolt"
            title="Fast & Lightweight"
            desc="The majority of classes are managed through JavaScript."
          />
          <Feature icon="sort" title="Utility-First" desc="Seamlessly apply pre-defined utility classes to elements." />
          <Feature
            icon="css"
            title="No CSS"
            desc="Elevate your design journey as styles are seamlessly applied directly to each element."
          />
          <Feature
            icon="draw"
            title="Customizable"
            desc="Easily customize your unique style with user-friendly configuration."
          />
        </section>
      </article>
    </>
  );
};

export default Home;
