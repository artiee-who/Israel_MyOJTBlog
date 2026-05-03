import { ArrowRight, Download, MapPin } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-shell">
      <div className="hero-media">
        <img src={`${import.meta.env.BASE_URL}cover photo.jpg`} alt="Art Jade Israel" />
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-kicker">
          <MapPin size={16} />
          DPWH Internship Journal
        </div>
        <h1>Art Jade T. Israel</h1>
        <p className="hero-lede">
          A redesigned personal OJT blog about college growth, real workplace learning,
          and the moments that shaped my first step into professional life.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollToSection("blog")}>
            Read the Blog
            <ArrowRight size={18} />
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection("resume")}>
            <Download size={18} />
            View Resume
          </button>
        </div>
      </div>

      <aside className="hero-card">
        <img src={`${import.meta.env.BASE_URL}IMG_8554.jpg`} alt="Portrait of Art Jade Israel" />
        <div>
          <span>Currently documenting</span>
          <strong>4 months of internship work, lessons, and milestones.</strong>
        </div>
      </aside>
    </section>
  );
}
