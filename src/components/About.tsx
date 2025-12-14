import { Code, Coffee, Lightbulb, Rocket } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Creative",
      description: "I bring fresh ideas and a unique perspective to every project I work on.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "I tackle challenges head-on and find practical solutions that work.",
    },
    {
      icon: Rocket,
      title: "Innovative",
      description: "I enjoy finding new ways to solve problems and improve processes.",
    },
    {
      icon: Coffee,
      title: "Curious",
      description: "I'm always eager to learn, explore, and understand how things work.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F3F4F7]">
            Get to <span className="text-[#B5E3FF]">Know Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5E3FF] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-[#B5E3FF] rounded-lg blur-2xl opacity-20"></div>
              <img
                src={`${import.meta.env.BASE_URL}cover photo.jpg`}
                alt="Workspace"
                className="relative rounded-lg shadow-2xl w-full h-64 sm:h-80 object-cover border border-[#C7CCD9]/20"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <h3 className="text-2xl sm:text-3xl mb-6 text-[#F3F4F7]">
              Curiosity Fuels my Creativity
            </h3>
            <p className="text-[#C7CCD9] mb-4">
              Hi! I'm Art, a student intern currently doing my on-the-job training at the Department of Public Works and Highways (DPWH). Stepping into a real office environment has been both exciting and challenging, and it's my first real exposure to how things work beyond school.
            </p>
            <p className="text-[#C7CCD9] mb-4">
              I have a creative background with an interest in design and technology, which shapes how I approach tasks and problem-solving. Whether I'm working on documents, observing workflows, or learning new tools, I enjoy finding ways to stay organized and improve what I do.
            </p>
            <p className="text-[#C7CCD9]">
              This blog is where I share my internship journey, daily experiences, lessons learned, small wins, and honest reflections along the way. It's a personal space to document growth, real moments, and everything I learn while navigating the professional world.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#B5E3FF]/10"
              >
                <div className="w-12 h-12 bg-[#B5E3FF]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-[#B5E3FF]" size={24} />
                </div>
                <h4 className="text-[#F3F4F7] mb-2">{item.title}</h4>
                <p className="text-[#C7CCD9] text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
