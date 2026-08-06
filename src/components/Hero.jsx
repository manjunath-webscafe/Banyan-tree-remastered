import Reveal from "./Reveal.jsx";
import heroVideo from "../assets/Villa.mp4";
import heroPoster from "../assets/hero.png";

const ROOT_PATHS = [
  "M600 780 C600 620 600 560 600 480",
  "M600 480 C600 480 380 460 300 300",
  "M600 480 C600 480 820 460 900 300",
  "M600 560 C600 560 470 540 420 430",
  "M600 560 C600 560 730 540 780 430",
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support video playback.
        </video>
        <img
          className="hero-fallback"
          src={heroPoster}
          alt="A sunlit contemporary residence framed by mature trees"
        />
        <div className="hero-scrim"></div>
      </div>

      <svg
        className="hero-roots"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {ROOT_PATHS.map((d) => (
          <path className="root-path" d={d} key={d} />
        ))}
      </svg>

      <div className="container hero-content">
        <Reveal as="p" className="eyebrow">
          Est. 2004 &middot; Bengaluru
        </Reveal>
        <Reveal as="h1" className="hero-title">
          Rooted in the city.
          <br />
          <em>Built for generations.</em>
        </Reveal>
        <Reveal as="p" className="hero-sub">
          Banyan Tree Group has spent two decades shaping Bengaluru's finest
          addresses — where thoughtful architecture, honest craft and quiet
          luxury are allowed to grow, slowly and deliberately.
        </Reveal>
        <Reveal className="hero-cta">
          <a href="#residences" className="btn btn-primary">
            Explore Our Residences
          </a>
          <a href="#legacy" className="btn btn-ghost">
            Our Story
          </a>
        </Reveal>
      </div>

      <a
        href="#legacy"
        className="scroll-cue"
        aria-label="Scroll to next section"
      >
        <span></span>
      </a>
    </section>
  );
}
