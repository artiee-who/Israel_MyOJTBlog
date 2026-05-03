import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Timeline } from "./components/Timeline";
import { Achievements } from "./components/Achievements";
import { PhotoGallery } from "./components/PhotoGallery";
import { CertificateGallery } from "./components/CertificateGallery";
import { Blog } from "./components/Blog";
import { BlogPost } from "./components/BlogPost";
import { Footer } from "./components/Footer";
import { getBlogPostById } from "./data/blogPostData";
import { useState } from "react";

export default function App() {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const handlePostClick = (postId: number) => {
    setSelectedPostId(postId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToBlog = () => {
    setSelectedPostId(null);
    setTimeout(() => {
      document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (selectedPostId) {
    const post = getBlogPostById(selectedPostId);
    if (post) {
      return (
        <BlogPost
          post={post}
          onBack={handleBackToBlog}
          onNavigateToPost={handlePostClick}
        />
      );
    }
  }

  return (
    <div className="blog-site">
      <Navigation />
      <Hero />
      <main>
        <About />
        <Resume />
        <Timeline />
        <Achievements />
        <PhotoGallery />
        <CertificateGallery />
        <Blog onPostClick={handlePostClick} />
      </main>
      <Footer />
    </div>
  );
}
