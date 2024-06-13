import About from "@/components/section/about";
import Contact from "@/components/section/contact";
import Gallery from "@/components/section/gallery";
import Hero from "@/components/section/hero";
import Testimonial from "@/components/section/testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonial />
      <About />
      <Gallery />
      <Contact />
    </>
  );
}
