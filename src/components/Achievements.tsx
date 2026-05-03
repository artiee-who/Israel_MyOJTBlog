import { Award, Trophy, Star, Target, Zap, Medal } from "lucide-react";

export function Achievements() {
  const achievements = [
    ["Top 4 | Research Fest", "Academic Excellence", "2025", Trophy],
    ["PEPT Passer", "Academic Excellence", "2020", Award],
    ["BE Scholarship", "Academic Scholarship", "2022 - 2026", Star],
    ["School Representative", "Leadership", "2022", Medal],
    ["ROTC Officer | Adjutant", "Extra Curricular", "2025", Target],
    ["RSCT & ARAPT Training Certified", "Extra Curricular", "2020", Zap],
    ["Deployed System Project | SCC Canteen", "Academic", "2025", Award],
    ["Deployed System Project | DPWH", "Academic", "2026", Award],
    ["Saint Thomas Aquinas Award", "Academic Award", "2026", Star],
  ] as const;

  return (
    <section id="achievements" className="section section-light">
      <div className="section-grid">
        <div className="section-heading">
          <span>Awards and Milestones</span>
          <h2>Recognition gathered from academics, leadership, service, and system work.</h2>
        </div>
        <p className="section-note">
          These milestones give the blog its wider story: not only internship output,
          but the preparation, discipline, and project experience that led into it.
        </p>
      </div>

      <div className="achievement-grid">
        {achievements.map(([title, category, year, Icon]) => (
          <article className="achievement-card" key={title}>
            <Icon size={24} />
            <span>{category}</span>
            <h3>{title}</h3>
            <strong>{year}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
