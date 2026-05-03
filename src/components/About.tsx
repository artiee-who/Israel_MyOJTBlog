import { Code, Coffee, Lightbulb, Rocket } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Hands-on learner",
      description: "I connect classroom lessons with real office systems and daily tasks.",
    },
    {
      icon: Lightbulb,
      title: "Practical thinker",
      description: "I look for simple, useful solutions that make work easier to finish.",
    },
    {
      icon: Rocket,
      title: "Growth focused",
      description: "I treat every new assignment as a chance to become more capable.",
    },
    {
      icon: Coffee,
      title: "Curious observer",
      description: "I pay attention to people, process, and the details behind good work.",
    },
  ];

  return (
    <section id="about" className="section section-light">
      <div className="section-grid">
        <div className="section-heading">
          <span>About the Journal</span>
          <h2>More than a portfolio, this is a record of becoming work-ready.</h2>
        </div>

        <div className="about-copy">
          <p>
            Hi! I'm Art, a BSIT student intern currently doing my on-the-job
            training at the Department of Public Works and Highways. This blog
            collects the real experiences, adjustments, and small wins that come
            from stepping into a professional office for the first time.
          </p>
          <p>
            My background in design, technology, leadership, and school projects
            shapes the way I work. Whether I am testing systems, organizing
            documents, observing office workflows, or helping a team prepare
            deliverables, I try to understand the purpose behind the task.
          </p>
        </div>
      </div>

      <div className="feature-row">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <article className="feature-card" key={item.title}>
              <Icon size={24} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
