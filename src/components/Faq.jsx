import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { faqs } from "../data/site.js";

function AccordionItem({ question, answer, isOpen, onToggle }) {
  const panelRef = useRef(null);

  // Height is measured rather than hard-coded so the CSS max-height
  // transition animates to the panel's real size.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const setHeight = () => {
      panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : "";
    };

    setHeight();
    if (!isOpen) return;

    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, [isOpen, answer]);

  return (
    <div className="accordion-item">
      <h3>
        <button
          className="accordion-trigger"
          aria-expanded={isOpen}
          onClick={onToggle}
        >
          {question}
        </button>
      </h3>
      <div className="accordion-panel" ref={panelRef}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section faq" id="faq">
      <div className="container faq-grid">
        <div className="faq-intro">
          <Reveal as="p" className="eyebrow">
            Good to Know
          </Reveal>
          <Reveal as="h2">Frequently asked questions.</Reveal>
          <Reveal as="p" className="section-lede">
            Can't find what you're looking for? Our team is happy to walk you
            through it personally.
          </Reveal>
          <Reveal as={Link} to="/contact#contact" className="text-link">
            Talk to our team →
          </Reveal>
        </div>

        <Reveal className="accordion" id="accordion">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.q}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
