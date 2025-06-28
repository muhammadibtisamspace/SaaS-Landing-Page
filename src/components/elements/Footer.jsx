import React from "react";
import Container from "../shared/Container";
import NavItems from "../shared/NavItems";
import { navlist } from "./Navbar";

const Footer = () => {
  return (
    <footer className="relative pt-28 rounded-t-3xl bg-box-bg ">
      <Container classname="pb-8 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div
            className="flex
               items-center gap-3 mb-4 md:mb-0"
          >
            <img src="/icon.svg" alt="Edge Ai Logo" className="w-7 h-7 " />
            <span className="text-lg font-semibold text-heading-1">
              Edge Ai
            </span>
          </div>

          <ul className="flex gap-6 text-heading-1 dark:text-white ">
            {navlist.map((item, key) => (
              <NavItems key={key} href={item.href} text={item.text}></NavItems>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
