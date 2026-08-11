import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToHash from "./components/ScrollToHash.jsx";
import Home from "./pages/Home.jsx";
import LegacyPage from "./pages/LegacyPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import JourneyPage from "./pages/JourneyPage.jsx";
import LeadershipPage from "./pages/LeadershipPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />
      <ScrollToHash />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legacy" element={<LegacyPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
