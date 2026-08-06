import Reveal from "./Reveal.jsx";
import { galleryImages } from "../data/site.js";

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="section-head center">
          <Reveal as="p" className="eyebrow">
            A Closer Look
          </Reveal>
          <Reveal as="h2">Spaces designed to be lived in.</Reveal>
        </div>
      </div>

      <Reveal className="gallery-strip">
        {galleryImages.map((image) => (
          <img src={image.src} alt={image.alt} loading="lazy" key={image.src} />
        ))}
      </Reveal>
    </section>
  );
}
