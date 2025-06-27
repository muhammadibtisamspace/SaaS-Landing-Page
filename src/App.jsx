import AboutUs from "./components/cards/AboutUs";
import Layout from "./components/Layout";
import Brands from "./components/section/Brands";
import Cta from "./components/section/CallToAction";
import HeroSec from "./components/section/HeroSec";
import Pricing from "./components/section/Pricing";
import Services from "./components/section/Services";
import "./index.css";

function App() {
  return (
    <>
      <Layout title="EdgeAi">
        <HeroSec />
        <Brands />
        <Services />
        <AboutUs />
        <Pricing />
        <Cta />
      </Layout>
    </>
  );
}

export default App;
