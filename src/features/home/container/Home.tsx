import About from "../components/About";
import { Hero } from "../components/Hero";
import { ImageGallery } from "../components/ImageGallery";
import { LazyImageGallery } from "../components/LazyImageGallery";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <ImageGallery /> */}
      <LazyImageGallery />
    </>
  );
};
export default Home;
