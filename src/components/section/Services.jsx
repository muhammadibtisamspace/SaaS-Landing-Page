import React from "react";
import Container from "../shared/container";
import Title from "../shared/Title";
import Paragraph from "../shared/Paragraph";

const Services = () => {
  return (
    <section id="Services">
      <Container classname="space-y-10 md:space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Title>Our Ai Services</Title>
          <Paragraph>
            Unlock The Potental Of Advance Machine Learning, Natural Language
            Porcessing And Predictive Analytics.
          </Paragraph>
        </div>
      </Container>
    </section>
  );
};

export default Services;
