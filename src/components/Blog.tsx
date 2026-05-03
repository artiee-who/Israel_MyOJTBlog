import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogProps {
  onPostClick?: (postId: number) => void;
}

export function Blog({ onPostClick }: BlogProps) {
  const blogPosts = [
    {
      id: 1,
      image: "cc4806db-5065-4e0c-8019-15f35734bcd6.jpg",
      category: "Adjustment",
      title: "1st Month of Internship",
      excerpt:
        "Adjusting to the workplace, learning office procedures, and building confidence through everyday documentation tasks.",
      date: "December 2025",
      readTime: "8 min read",
    },
    {
      id: 2,
      image: "b1b65e38-ded2-4653-8679-93fd54504304.jpg",
      category: "Teamwork",
      title: "2nd Month of Internship",
      excerpt:
        "Getting deeper into document processing, technical support, collaboration, and system planning.",
      date: "January 2026",
      readTime: "10 min read",
    },
    {
      id: 3,
      image: "b43335fd-3f02-40b3-8c51-661000b3609a.jpg",
      category: "Development",
      title: "3rd Month of Internship",
      excerpt:
        "Strengthening system development, troubleshooting, office coordination, and stakeholder communication.",
      date: "February 2026",
      readTime: "6 min read",
    },
    {
      id: 4,
      image: "60ca191d-73e8-4761-99f7-aa8a1dac586d.jpg",
      category: "Completion",
      title: "4th Month of Internship",
      excerpt:
        "Finalizing the system, checking quality, preparing turnover materials, and completing the OJT journey.",
      date: "March 2026",
      readTime: "7 min read",
    },
  ];

  return (
    <section id="blog" className="section section-light">
      <div className="section-heading section-heading-wide">
        <span>Internship Entries</span>
        <h2>A month-by-month field journal from student life to office life.</h2>
      </div>

      <div className="blog-layout">
        <article className="blog-feature" onClick={() => onPostClick?.(blogPosts[0].id)}>
          <img
            src={`${import.meta.env.BASE_URL}${blogPosts[0].image}`}
            alt={blogPosts[0].title}
          />
          <div>
            <span>{blogPosts[0].category}</span>
            <h3>{blogPosts[0].title}</h3>
            <p>{blogPosts[0].excerpt}</p>
            <button>
              Start reading
              <ArrowRight size={18} />
            </button>
          </div>
        </article>

        <div className="blog-list">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              onClick={() => onPostClick?.(post.id)}
              className="blog-card"
            >
              <img
                src={`${import.meta.env.BASE_URL}${post.image.replace(/^\//, "")}`}
                alt={post.title}
              />
              <div>
                <span>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="card-meta">
                  <span>
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span>
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
