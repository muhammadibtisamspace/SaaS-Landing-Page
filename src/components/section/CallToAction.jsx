import React from "react";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import SubmitButton from "../shared/SubmitButton";

const Cta = () => {
  return (
    <section className="pb-20 relative">
      <Container className="">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl md:py-10 py-8 md:px-8 px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              Quick Start Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Own AI Business
              </span>
            </h1>
            <Paragraph className="pt-10">
              Leverage out AI-powererd platform to revolutionize your digital
              marketing efforts. Get data-driven iinsights and automation at
              your fingertips.
            </Paragraph>
            <div className="pt-10 dark:text-white mx-auto md:max-w-xl max-w-md ">
              <SubmitButton>Get In Touch</SubmitButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
