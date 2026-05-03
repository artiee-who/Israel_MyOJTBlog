import { Calendar, Code, Trophy, Users } from "lucide-react";

export function Timeline() {
  const timelineData = [
    {
      year: "1st Year",
      period: "2022 - 2023",
      title: "Exploring and Learning",
      image: `${import.meta.env.BASE_URL}1st year.jpeg`,
      description:
        "Building a foundation in information technology while discovering creative and academic strengths.",
      highlights: [
        { icon: Code, text: "First programming course" },
        { icon: Users, text: "Joined HIDUHA Musica Club" },
        { icon: Trophy, text: "Comical Skit Champion" },
      ],
    },
    {
      year: "2nd Year",
      period: "2023 - 2024",
      title: "Knowledge to Practice",
      image: `${import.meta.env.BASE_URL}2nd year.JPG`,
      description:
        "Turning school theory into practical work through projects, collaboration, and leadership training.",
      highlights: [
        { icon: Code, text: "First client with OOP" },
        { icon: Users, text: "Joined ROTC Officer" },
        { icon: Trophy, text: "Tactical Champion in ROTC" },
      ],
    },
    {
      year: "3rd Year",
      period: "2024 - 2025",
      title: "Stepping Forward",
      image: `${import.meta.env.BASE_URL}3rd year.JPG`,
      description:
        "Taking on larger technical projects, defending capstone work, and preparing for professional exposure.",
      highlights: [
        { icon: Code, text: "Capstone project proposal" },
        { icon: Trophy, text: "Capstone 1 defended" },
        { icon: Users, text: "Mentored juniors" },
      ],
    },
    {
      year: "4th Year",
      period: "2025 - 2026",
      title: "Internship",
      image: `${import.meta.env.BASE_URL}cc4806db-5065-4e0c-8019-15f35734bcd6.jpg`,
      description:
        "Applying skills at DPWH through system quality assurance, documentation, and real workplace coordination.",
      highlights: [
        { icon: Trophy, text: "Top 5 Research Festival" },
        { icon: Code, text: "Capstone deployment" },
        { icon: Users, text: "Internship at DPWH" },
      ],
    },
  ];

  return (
    <section id="timeline" className="section section-ink">
      <div className="section-heading section-heading-wide">
        <span>College Journey</span>
        <h2>Four years shaped into one clear path toward professional work.</h2>
      </div>

      <div className="journey-track">
        {timelineData.map((item) => (
          <article className="journey-card" key={item.year}>
            <img src={item.image} alt={item.title} />
            <div className="journey-card__body">
              <div className="card-meta">
                <span>
                  <Calendar size={14} />
                  {item.period}
                </span>
                <strong>{item.year}</strong>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.highlights.map((highlight) => {
                  const Icon = highlight.icon;
                  return (
                    <li key={highlight.text}>
                      <Icon size={15} />
                      {highlight.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
