import React, { useEffect } from "react";
import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";

const Layout = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <Navbar />

      <main className=" flex flex-col gap-y-20 md:gap-y32 overflow-hidden ">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
