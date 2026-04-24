import { Calendar, Code, Trophy, Users } from "lucide-react";

export function Timeline() {
  const timelineData = [
    {
      year: "1st Year",
      period: "2022 - 2023",
      title: "Exploring and Learning",
      image: `${import.meta.env.BASE_URL}1st year.jpeg`,
      description:
        "I started my journey as a first-year BSIT student, diving into the fundamentals of information technology while exploring my interests and discovering new skills. This year was all about building a strong foundation and getting a glimpse of the professional world I'm preparing for.",
      highlights: [
        { icon: Code, text: "First programming course" },
        { icon: Users, text: "Joined HIDUHA Musica Club" },
        { icon: Trophy, text: "Comical Skit Champion" },
        { icon: Trophy, text: "Champion in Art Exhibit" },
      ],
    },
    {
      year: "2nd Year",
      period: "2023 - 2024",
      title: "Knowledge to Practice",
      image: `${import.meta.env.BASE_URL}2nd year.JPG`,
      description:
        "In my second year of BSIT, I focused on applying the knowledge I gained in my first year to real-world scenarios. I worked on more challenging courses and hands-on projects that strengthened my skills, encouraged collaboration, and helped me solve practical problems. This year was all about turning theory into practice and preparing for bigger opportunities ahead, including my internship.",
      highlights: [
        { icon: Code, text: "First Client with OOP" },
        { icon: Users, text: "Joined ROTC Officer" },
        { icon: Trophy, text: "Tactical Champion in ROTC" },
      ],
    },
    {
      year: "3rd Year",
      period: "2024 -2025",
      title: "Stepping Forward",
      image: `${import.meta.env.BASE_URL}3rd year.JPG`,
      description:
        "In my third year of BSIT, I took on more complex projects and began exploring specialized areas in technology. This year was about stepping forward, expanding my skills, collaborating on team projects, and tackling challenges that pushed me to think critically and creatively. It was also the time I prepared more seriously for real-world experiences, including my upcoming internship, building confidence in both my technical and professional abilities.",
      highlights: [
        { icon: Code, text: "Capstone Project Proposal" },
        { icon: Trophy, text: "Capstone 1 Defended" },
        { icon: Users, text: "Mentored juniors" },
      ],
    },
    {
      year: "4th Year",
      period: "2025 - 2026",
      title: "Internship",
      image: "https://images.unsplash.com/photo-1623461487986-9400110de28e?w=600&h=400&fit=crop",
      description:
        "In my fourth year of BSIT, I fully stepped into the professional world through my internship at the Department of Public Works and Highways (DPWH). This experience allowed me to apply the skills and knowledge I developed over the past years to real-world tasks and challenges. It was a year of growth, hands-on learning, and gaining insight into the professional environment, preparing me for my future career while reflecting on everything I've learned throughout college.",
      highlights: [
        { icon: Trophy, text: "Top 5 Research Festival" },
        { icon: Code, text: "Capstone Project Deployment" },
        { icon: Users, text: "Internship at DPWH" },
      ],
    },
  ];

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F3F4F7]">
            My College <span className="text-[#B5E3FF]">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5E3FF] mx-auto rounded-full"></div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#B5E3FF]/50 to-[#B5E3FF]/10"></div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-5/12">
                  <div className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#B5E3FF]/10">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="text-[#B5E3FF]" size={16} />
                      <span className="text-[#B5E3FF] text-sm">{item.period}</span>
                    </div>
                    <h3 className="text-xl text-[#F3F4F7] mb-2">{item.title}</h3>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg mb-4 border border-[#C7CCD9]/20"
                    />
                    <p className="text-[#C7CCD9] text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      {item.highlights.map((highlight, idx) => {
                        const Icon = highlight.icon;
                        return (
                          <div key={idx} className="flex items-center gap-2">
                            <Icon className="text-[#B5E3FF]" size={16} />
                            <span className="text-[#C7CCD9] text-sm">
                              {highlight.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Year Badge */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-24 h-24 bg-[#B5E3FF] rounded-full flex items-center justify-center text-[#0D0D12] z-10 border-4 border-[#0D0D12] shadow-lg shadow-[#B5E3FF]/30">
                    <span className="text-sm text-center">{item.year}</span>
                  </div>
                </div>

                {/* Empty space */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden space-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-12">
              {/* Vertical line */}
              {index !== timelineData.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#B5E3FF]/50 to-[#B5E3FF]/10"></div>
              )}

              {/* Year Badge */}
              <div className="absolute left-0 top-0 w-10 h-10 bg-[#B5E3FF] rounded-full flex items-center justify-center text-[#0D0D12] text-xs border-4 border-[#0D0D12] shadow-lg shadow-[#B5E3FF]/30">
                {index + 1}
              </div>

              {/* Content */}
              <div className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="text-[#B5E3FF]" size={16} />
                  <span className="text-[#B5E3FF] text-sm">{item.period}</span>
                </div>
                <h3 className="text-xl text-[#F3F4F7] mb-2">{item.year} - {item.title}</h3>
                <p className="text-[#C7CCD9] text-sm mb-4">{item.description}</p>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 border border-[#C7CCD9]/20"
                />
                <div className="space-y-2">
                  {item.highlights.map((highlight, idx) => {
                    const Icon = highlight.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon className="text-[#B5E3FF]" size={16} />
                        <span className="text-[#C7CCD9] text-sm">
                          {highlight.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
