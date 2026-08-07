import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import LegacyPage from "./pages/LegacyPage.jsx";
import PhilosophyPage from "./pages/PhilosophyPage.jsx";
import ResidencesPage from "./pages/ResidencesPage.jsx";
import JourneyPage from "./pages/JourneyPage.jsx";
import TestimonialsPage from "./pages/TestimonialsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legacy" element={<LegacyPage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/residences" element={<ResidencesPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/voices" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
