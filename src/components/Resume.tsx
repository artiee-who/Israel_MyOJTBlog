import { Download, Briefcase, GraduationCap } from "lucide-react";

export function Resume() {
  const experiences = [
    {
      title: "Capstone Project | System Quality Assurance",
      company: "Saint Columban College",
      period: "2025 - Present",
      description:
        "Ensures system quality by performing tests, identifying bugs, and validating features against requirements. Collaborates with developer and stakeholder on test planning, documentation, and execution. Provides feedback to improve performance and ensure a reliable, user-ready product.",
    },
    {
      title: "Research Festival | Top 5",
      company: "Saint Columban College",
      period: "November 7, 2025",
      description:
        "Secured a Top 5 spot in the Research Festival by presenting an innovative system that digitizes and streamlines school canteen operations, showcasing teamwork and effective problem-solving.",
    },
    {
      title: "Research Festival | Top 5",
      company: "Saint Columban College",
      period: "November 7, 2025",
      description:
        "Secured a Top 5 spot in the Research Festival by presenting an innovative system that digitizes and streamlines school canteen operations, showcasing teamwork and effective problem-solving.",
    },
    {
      title: "Philippine Educational Placement Test Passer",
      company: "Thomas Sagun Elementary School",
      period: "2019 - 2020",
      description:
        "I passed the Philippine Educational Placement Test (PEPT), which allowed me to accelerate directly to Senior High and start Grade 11 ahead of schedule. This milestone opened the door to new academic challenges and opportunities for growth.",
    },
    {
      title: "ROTC Officer | Adjutant",
      company: "Saint Columban College",
      period: "2024 - 2025",
      description:
        "Assisted in planning, organizing, and coordinating ROTC activities and training programs. Maintained records, communicated orders, and supported leadership in ensuring smooth operations and effective execution of initiatives.",
    },
    {
      title: "Supreme Student Government | President",
      company: "Zamboanga Del Sur School of Arts and Trades",
      period: "2021 - 2022",
      description:
        "Strengthened student participation by introducing projects that encouraged leadership, discipline, and collaboration.",
    },
  ];

  const education = [
    {
      degree: "San Pedro Central Elementary School",
      school: "Primary Education",
      period: "2011 - 2016",
      description:
        "Graduated from elementary school with High Honors, earning Special Awards for Best in Filipino, Best in Art, and Outstanding Academic Performance.",
    },
    {
      degree: "Navalan National High School",
      school: "Secondary Education",
      period: "2016 - 2017",
      description:
        "I transferred from a different school due to personal reasons, seeking new opportunities to grow academically and creatively. The change gave me a fresh perspective and allowed me to explore new experiences that shaped my journey.",
    },
    {
      degree: "Zamboanga Del Sur School of Arts and Trades",
      school: "Secondary Education",
      period: "2017 - 2020",
      description:
        "I accelerated directly to Senior High, entering Grade 11, after passing the Philippine Educational Placement Test (PEPT). This allowed me to advance faster in my education and dive into new challenges and opportunities earlier than most.",
    },
    {
      degree: "Zamboanga Del Sur School of Arts and Trades",
      school: "Senior High School",
      period: "2020 - 2022",
      description:
        "I graduated from Senior High School with Honors and a Service Award, and I was also offered various scholarships, including the West Prime College Scholarship. These achievements reflect both my academic dedication and my commitment to serving others.",
    },
    {
      degree: "Saint Columban College",
      school: "College Education",
      period: "2020 - Present",
      description:
        "I'm currently an intern at the Department of Public Works and Highways (DPWH), gaining hands-on experience and learning what it's like to work in a real professional environment. This opportunity allows me to apply what I've learned in school while developing new skills for my future career.",
    },
  ];

  const skills = [
    { name: "Management Skills", level: 90 },
    { name: "Creativity", level: 95 },
    { name: "Communication Skills", level: 85 },
    { name: "Critical Thinking", level: 80 },
    { name: "Leadership Skills", level: 85 },
    { name: "Goal Oriented", level: 75 },
    { name: "Team Player", level: 90 },
    { name: "UI/UX Design", level: 70 },
  ];

  const technicalSkills = [
    { name: "MS Word Office", level: 90 },
    { name: "MS Powerpoint", level: 95 },
    { name: "Canva", level: 85 },
    { name: "Figma", level: 80 },
    { name: "HTML", level: 85 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 85 },
    { name: "PHP", level: 70 },
  ];

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1F35]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F3F4F7]">
            Resume & <span className="text-[#B5E3FF]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5E3FF] mx-auto rounded-full mb-6"></div>
          <button 
            onClick={() => {
              const link = document.createElement('a');
              link.href = `${import.meta.env.BASE_URL}Israel CV.pdf`;
              link.download = 'Israel CV.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="px-6 py-3 bg-[#B5E3FF] text-[#0D0D12] rounded-lg hover:bg-[#B5E3FF]/90 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <Download size={20} />
            Download CV
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#B5E3FF]/10 rounded-lg flex items-center justify-center">
                <Briefcase className="text-[#B5E3FF]" size={20} />
              </div>
              <h3 className="text-2xl text-[#F3F4F7]">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-[#C7CCD9]/20 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#B5E3FF] rounded-full border-4 border-[#0D0D12]"></div>

                  <div className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300">
                    <p className="text-[#B5E3FF] text-sm mb-2">{exp.period}</p>
                    <h4 className="text-[#F3F4F7] mb-1">{exp.title}</h4>
                    <p className="text-[#C7CCD9] text-sm mb-3">{exp.company}</p>
                    <p className="text-[#C7CCD9] text-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#B5E3FF]/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-[#B5E3FF]" size={20} />
              </div>
              <h3 className="text-2xl text-[#F3F4F7]">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-[#C7CCD9]/20 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#B5E3FF] rounded-full border-4 border-[#0D0D12]"></div>

                  <div className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300">
                    <p className="text-[#B5E3FF] text-sm mb-2">{edu.period}</p>
                    <h4 className="text-[#F3F4F7] mb-1">{edu.degree}</h4>
                    <p className="text-[#C7CCD9] text-sm mb-3">{edu.school}</p>
                    <p className="text-[#C7CCD9] text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="text-2xl text-[#F3F4F7] mb-8 text-center">
            Expertise
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-[#F3F4F7]">{skill.name}</span>
                  <span className="text-[#B5E3FF]">{skill.level}%</span>
                </div>
                <div className="h-2 bg-[#1A1F35] rounded-full overflow-hidden border border-[#C7CCD9]/20">
                  <div
                    className="h-full bg-gradient-to-r from-[#B5E3FF] to-[#B5E3FF]/70 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div className="mt-12">
          <h3 className="text-2xl text-[#F3F4F7] mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div key={`technical-${index}`}>
                <div className="flex justify-between mb-2">
                  <span className="text-[#F3F4F7]">{skill.name}</span>
                  <span className="text-[#B5E3FF]">{skill.level}%</span>
                </div>
                <div className="h-2 bg-[#1A1F35] rounded-full overflow-hidden border border-[#C7CCD9]/20">
                  <div
                    className="h-full bg-gradient-to-r from-[#B5E3FF] to-[#B5E3FF]/70 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
