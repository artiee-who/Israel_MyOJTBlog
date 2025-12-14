import { Award, Trophy, Star, Target, Zap, Medal } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Top 5 Performer | Research Festival",
      category: "Academic Excellence",
      year: "2025",
      description:
        "Recognized as Top 5 in the College Research Festival - showcasing my team's research skills and dedication to academic excellence.",
    },
    {
      icon: Award,
      title: "PEPT Passer",
      category: "Academic Excellence",
      year: "2020",
      description:
        "Recognized as a Philippine Educational Placement Test (PEPT) Passer, allowing me to accelerate directly to Grade 11 and continue my studies ahead of schedule.",
    },
    {
      icon: Star,
      title: "BE Scholarship",
      category: "Academic Scholarship",
      year: "2022 - 2026",
      description:
        "After successfully taking the entrance exam, I was granted this opportunity in recognition of my academic performance and potential.",
    },
    {
      icon: Medal,
      title: "School Representative",
      category: "Leadership",
      year: "2022",
      description:
        "Actively involve in a departmental organization officers",
    },
    {
      icon: Target,
      title: "ROTC Officer | Adjutant",
      category: "Extra Curricular",
      year: "2025",
      description:
        "Recognized as ROTC Officer Adjutant - serving in a leadership role and assisting in organizing training, events, and administrative tasks, developing discipline and teamwork skills.",
    },
    {
      icon: Zap,
      title: "RSCT & ARAPT",
      category: "Extra Curricular",
      year: "2020",
      description:
        "Honed technical and practical skills in preparation for regional competitions and strengthened research and analytical skills through focused academic projects.",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1F35]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F3F4F7]">
            Achievements & <span className="text-[#B5E3FF]">Awards</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5E3FF] mx-auto rounded-full"></div>
        </div>

        {/* Masonry Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#B5E3FF]/10 hover:-translate-y-1 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#B5E3FF]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#B5E3FF]/20 transition-colors">
                  <Icon className="text-[#B5E3FF]" size={28} />
                </div>

                {/* Category & Year */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#B5E3FF] text-xs px-2 py-1 bg-[#B5E3FF]/10 rounded">
                    {achievement.category}
                  </span>
                  <span className="text-[#C7CCD9] text-xs">
                    {achievement.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[#F3F4F7] text-lg mb-3">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-[#C7CCD9] text-sm">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
