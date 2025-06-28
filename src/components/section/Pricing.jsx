import React from "react";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";
import PricingPlan from "../shared/PricingPlan";
import SubmitButton from "../shared/SubmitButton";
const Pricing = () => {
  return (
    <section id="pricing" className="py-5 ">
      <Container classname="text-center ">
        <Title>Pricing</Title>
        <Paragraph className="mt-4">
          Choose The Plan That's Right For Your Business
        </Paragraph>
      </Container>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {PricingPlan.map((plan, key) => (
            <div key={key} className="relative group h-full">
              <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                <div
                  className="bg-box-bg border border-box-border rounded-3xl shadow-box-shadw
                                p-8 relative h-full flex flex-col"
                >
                  {plan.bestValue && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-1/2 bg-primary
                                                    text-white text-xs uppercase tracking-wider font-bold
                                                    px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600"
                    >
                      {" "}
                      Best Value
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-heading-1">
                    {plan.title}
                  </h3>

                  <p className="text-4xl mt-4  font-bold text-heading-1">
                    {plan.price}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3 text-left text-heading-1 black:text-white">
                    {plan.features.map((features, keyfeaturs) => (
                      <li key={keyfeaturs} className="flex itmes-center gap-2 ">
                        <span className="text-primary ">✅</span>
                        <span>{features}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <SubmitButton
                      className="w-full transform transition-transform duration-300
                                             hover:scale-105 text-white "
                    >
                      Choose Plan
                    </SubmitButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
