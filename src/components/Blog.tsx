import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogProps {
  onPostClick?: (postId: number) => void;
}

export function Blog({ onPostClick }: BlogProps) {
  const blogPosts = [
    {
      id: 1,
      image: `cc4806db-5065-4e0c-8019-15f35734bcd6.jpg`,
      category: "Web Development",
      title: "1st Month of Internship",
      excerpt:
        "My first month of internship focused on adjusting to the workplace, learning office procedures, and gaining hands-on experience in documentation and daily tasks.",
      date: "December 2025",
      readTime: "8 min read",
    },
    {
      id: 2,
      image: `b1b65e38-ded2-4653-8679-93fd54504304.jpg`,
      category: "Collaboration",
      title: "2nd Month of Internship",
      excerpt:
        "My second month of internship involved document processing, technical support tasks, teamwork, and deeper involvement in system planning and development.",
      date: "January 2026",
      readTime: "10 min read",
    },
    {
      id: 3,
      image: `b43335fd-3f02-40b3-8c51-661000b3609a.jpg`,
      category: "Development",
      title: "3rd Month of Internship",
      excerpt:
        "My third month of internship strengthened my experience in system development, troubleshooting, office coordination, and stakeholder collaboration.",
      date: "Febaruary 2026",
      readTime: "6 min read",
    },
    {
      id: 4,
      image: `${import.meta.env.BASE_URL}60ca191d-73e8-4761-99f7-aa8a1dac586d.jpg`,
      category: "Implementation",
      title: "4th Month of Internship",
      excerpt:
        "My fourth month of internship centered on system finalization, quality assurance, turnover preparation, and completing my OJT responsibilities.",
      date: "March 2026",
      readTime: "7 min read",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F3F4F7]">
            Internship Blog <span className="text-[#B5E3FF]">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5E3FF] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onPostClick?.(post.id)}
              className="bg-[#1A1F35] rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300 overflow-hidden group hover:shadow-lg hover:shadow-[#B5E3FF]/10 hover:-translate-y-1 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#B5E3FF] text-[#0D0D12] text-xs rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-3 text-[#C7CCD9] text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#F3F4F7] text-lg mb-3 group-hover:text-[#B5E3FF] transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#C7CCD9] text-sm mb-4">{post.excerpt}</p>

                {/* Read More Link */}
                <button className="flex items-center gap-2 text-[#B5E3FF] hover:gap-3 transition-all text-sm">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-transparent border-2 border-[#B5E3FF] text-[#B5E3FF] rounded-lg hover:bg-[#B5E3FF]/10 transition-all duration-300">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
}
