import { useState } from "react";
import { X, Award } from "lucide-react";

export function CertificateGallery() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certificates = [
    "Project System Deployment",
    "Workflow Automation Certified",
    "Workshop on Office Workplace Etiquette Certified",
    "Top 4 Research Festival",
    "Digital Career Expo Certificate",
    "Java Data Structures Certified",
  ].map((title, index) => ({
    url: `${import.meta.env.BASE_URL}certcover.png`,
    title,
    issuer: index === 4 ? "DICT | Pagadian City" : "Saint Columban College",
    date: index === 3 || index === 4 || index === 5 ? "2025" : "2026",
  }));

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = "auto";
  };

  const openModal = (index: number) => {
    setSelectedCert(index);
    document.body.style.overflow = "hidden";
  };

  return (
    <section id="certificates" className="section section-light">
      <div className="section-heading section-heading-wide">
        <span>Credentials</span>
        <h2>Certificates that support the internship story and technical growth.</h2>
      </div>

      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <button key={cert.title} onClick={() => openModal(index)} className="certificate-card">
            <img src={cert.url} alt={cert.title} />
            <div>
              <Award size={20} />
              <span>{cert.date}</span>
            </div>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
          </button>
        ))}
      </div>

      {selectedCert !== null && (
        <div className="lightbox" onClick={closeModal}>
          <button className="lightbox__close" onClick={closeModal} aria-label="Close certificate">
            <X size={24} />
          </button>
          <div className="certificate-modal" onClick={(event) => event.stopPropagation()}>
            <img
              src={certificates[selectedCert].url}
              alt={certificates[selectedCert].title}
            />
            <h3>{certificates[selectedCert].title}</h3>
            <p>{certificates[selectedCert].issuer} | {certificates[selectedCert].date}</p>
          </div>
        </div>
      )}
    </section>
  );
}
