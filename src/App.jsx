import { useEffect, useRef } from "react";
import "./App.css";
import Headers from "./pages/Headers";
import Navbar from "./pages/Navbar";
import Services from "./pages/Services";
import SobreMim from "./pages/SobreMim";
import Footer from "./pages/Footer";

function App() {
  const navbarRef = useRef(null);
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollTopRef.current) {
        navbarRef.current.classList.remove("visible");
      } else {
        navbarRef.current.classList.add("visible");
      }
      lastScrollTopRef.current = scrollY <= 0 ? 0 : scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleIntersect = (entries, observer, className) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        } else {
          entry.target.classList.remove(className);
        }
      });
    };

    const observer1 = new IntersectionObserver((entries) =>
      handleIntersect(entries, observer1, "show")
    );
    const observer2 = new IntersectionObserver((entries) =>
      handleIntersect(entries, observer2, "measure1")
    );
    const observer3 = new IntersectionObserver((entries) =>
      handleIntersect(entries, observer3, "measure2")
    );

    const elements = document.querySelectorAll(".hidden");
    const measure1 = document.querySelectorAll(".measure-1");
    const measure2 = document.querySelectorAll(".measure-2");

    elements.forEach((el) => observer1.observe(el));
    measure1.forEach((el) => observer2.observe(el));
    measure2.forEach((el) => observer3.observe(el));

    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
    };
  }, []);

  return (
    <div>
      <nav className="navbar visible" ref={navbarRef}>
        <Navbar />
      </nav>
      <main className="container">
        <header id="header">
          <Headers />
        </header>
        <SobreMim />
        <section id="services" className="services">
          <Services />
        </section>
        <footer id="footer">
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default App;
