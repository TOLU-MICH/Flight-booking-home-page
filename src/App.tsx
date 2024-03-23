import AboutUs from "./component/AboutUs.tsx";
import Blog from "./component/Blog.tsx";
import CallToAction from "./component/CallToAction.tsx";
import Features from "./component/Features.tsx";
import Footer from "./component/Footer.tsx";
import Hero from "./component/Hero.tsx";
import Navbar from "./component/NavBar.tsx";
import Plans from "./component/Plans.tsx";

function App() {
  return (
    <section>
      <Navbar />
      <Hero />
      <div className="max-w-screen-xl w-full px-8 md:px-12 lg:px-16 m-auto">
        <Features />
        <AboutUs />
        <Plans />
      </div>
      <CallToAction />
      <Blog />
      <Footer />
    </section>
  );
}

export default App;
