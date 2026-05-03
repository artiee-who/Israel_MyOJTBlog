import { Calendar, Clock, User, ArrowLeft, ArrowRight, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

interface BlogPostProps {
  onBack: () => void;
  onNavigateToPost: (postId: number) => void;
  post: {
    id: number;
    image: string;
    category: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    author: {
      name: string;
      avatar: string;
      bio: string;
    };
    content: {
      sections: Array<{
        id: string;
        heading: string;
        date?: string;
        paragraphs: string[];
        image?: string;
        imageAlt?: string;
      }>;
      keyTakeaways?: string[];
      tags?: string[];
    };
  };
}

export function BlogPost({ onBack, onNavigateToPost, post }: BlogPostProps) {
  const [activeSection, setActiveSection] = useState(post.content.sections[0]?.id ?? "");

  const imagePath = (path: string) =>
    path.startsWith("http") ? path : `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

  const nextPostMap: Record<number, { id: number; label: string }> = {
    1: { id: 2, label: "2nd Month" },
    2: { id: 3, label: "3rd Month" },
    3: { id: 4, label: "4th Month" },
    4: { id: 1, label: "1st Month" },
  };
  const nextPost = nextPostMap[post.id];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 96,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="post-page">
      <button onClick={onBack} className="post-back">
        <ArrowLeft size={18} />
        Back to Blog
      </button>

      <header className="post-hero">
        <img src={imagePath(post.image)} alt={post.title} />
        <div>
          <span>{post.category}</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="post-meta">
            <span>
              <Calendar size={16} />
              {post.date}
            </span>
            <span>
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>
        </div>
      </header>

      <main className="post-layout">
        <article className="post-article">
          <div className="post-author">
            <img src={imagePath(post.author.avatar)} alt={post.author.name} />
            <div>
              <span>
                <User size={15} />
                Written by {post.author.name}
              </span>
              <p>{post.author.bio}</p>
            </div>
          </div>

          {post.content.sections.map((section) => (
            <section id={section.id} key={section.id} className="post-section">
              <h2>{section.heading}</h2>
              {section.date && <span className="post-section__date">{section.date}</span>}
              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph.replace(/`/g, "")}</p>
              ))}
              {section.image && (
                <img
                  src={imagePath(section.image)}
                  alt={section.imageAlt || section.heading}
                  className="post-section__image"
                />
              )}
            </section>
          ))}

          {post.content.keyTakeaways && (
            <section className="takeaway-box">
              <h2>Key Takeaways</h2>
              <ul>
                {post.content.keyTakeaways.map((takeaway) => (
                  <li key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </section>
          )}

          <div className="post-tags">
            {(post.content.tags ?? []).map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>

          <div className="post-actions">
            <button onClick={onBack}>
              <ArrowLeft size={18} />
              Blog Home
            </button>
            <button onClick={() => onNavigateToPost(nextPost.id)}>
              {nextPost.label}
              <ArrowRight size={18} />
            </button>
          </div>
        </article>

        <aside className="post-sidebar">
          <button onClick={copyLink} className="copy-link">
            <LinkIcon size={18} />
            Copy Article Link
          </button>
          <div>
            <h3>Contents</h3>
            {post.content.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={activeSection === section.id ? "active" : ""}
              >
                {section.heading}
              </button>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}
