import React from "react";
import "./index.css";
import {
  FlexContent,
  Hero,
  ProductsSlides,
  Sales,
  Footer,
  Navbar,
  Cart,
} from "./components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";

function App() {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <ProductsSlides story={story} />
        <Footer footerAPI={footerAPI} />
      </main>
    </>
  );
}

export default App;
