import About from "./components/About";
import CodingStats from "./components/CodingStats";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import ThreeBackground from "./components/ThreeBackground";
import VisitTracker from "./components/VisitTracker";
import Work from "./components/Work";

// Rebuild the page (and its LeetCode / GitHub stats) at most every 6 hours.
export const revalidate = 21600;

export default function Home() {
  return (
    <>
      <VisitTracker />
      <ThreeBackground />
      <Navbar />
      <main className="relative z-[1]">
        <Header />
        <About />
        <Services />
        <Experience />
        <Work />
        <CodingStats />
        <Contact />
      </main>
      <div className="relative z-[1]">
        <Footer />
      </div>
    </>
  );
}
