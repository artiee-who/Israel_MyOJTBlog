import { Download, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

export function Resume() {
  const experiences = [
    ["System Project | System Quality Assurance", "DPWH Pagadian City", "2026 - Present"],
    ["Capstone Project | System Quality Assurance", "Saint Columban College", "2025 - 2026"],
    ["Research Festival | Top 5", "Saint Columban College", "November 7, 2025"],
    ["ROTC Officer | Adjutant", "Saint Columban College", "2024 - 2025"],
    ["Supreme Student Government | President", "ZDS School of Arts and Trades", "2021 - 2022"],
  ];

  const education = [
    ["Saint Columban College", "College Education", "2022 - Present"],
    ["Zamboanga Del Sur School of Arts and Trades", "Senior High School", "2020 - 2022"],
    ["Zamboanga Del Sur School of Arts and Trades", "Secondary Education", "2017 - 2020"],
    ["San Pedro Central Elementary School", "Primary Education", "2011 - 2016"],
  ];

  const skills = [
    "System quality assurance",
    "Documentation",
    "UI/UX Design",
    "HTML, CSS, JavaScript",
    "Figma and Canva",
    "Leadership",
    "Communication",
    "Team collaboration",
  ];

  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}Israel CV.pdf`;
    link.download = "Israel CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section resume-section">
      <div className="resume-panel">
        <div className="section-heading">
          <span>Resume Snapshot</span>
          <h2>Built around QA work, school leadership, design, and real system delivery.</h2>
        </div>
        <button className="btn btn-primary" onClick={downloadCv}>
          <Download size={18} />
          Download CV
        </button>
      </div>

      <div className="resume-columns">
        <div className="resume-column">
          <h3>
            <Briefcase size={22} />
            Experience
          </h3>
          {experiences.map(([title, company, period]) => (
            <article className="resume-item" key={`${title}-${period}`}>
              <span>{period}</span>
              <h4>{title}</h4>
              <p>{company}</p>
            </article>
          ))}
        </div>

        <div className="resume-column">
          <h3>
            <GraduationCap size={22} />
            Education
          </h3>
          {education.map(([school, level, period]) => (
            <article className="resume-item" key={`${school}-${period}`}>
              <span>{period}</span>
              <h4>{school}</h4>
              <p>{level}</p>
            </article>
          ))}
        </div>

        <div className="skills-panel">
          <h3>Core Skills</h3>
          <div>
            {skills.map((skill) => (
              <span key={skill}>
                <CheckCircle2 size={15} />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
