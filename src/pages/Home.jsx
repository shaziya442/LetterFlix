import Price from "../components/body/Price";
import FeatureCard from "../components/body/FeatureCard";
import FeaturesHighlight from "../components/body/FeaturesHighlight";
import Faq from "../components/body/Faq";
import AddressForm from "../components/body/AddressForm";
import Testimonials from "../components/body/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Price />
      <FeatureCard />
      <FeaturesHighlight />
      <Faq />
      <AddressForm />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
