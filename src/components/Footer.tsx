import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Message sent! (This is a demo)");
    setEmail("");
    setMessage("");
  };

  const socialLinks = [
    { icon: Instagram, url: "https://www.instagram.com/artieewho/", label: "Instagram" },
    { icon: Facebook, url: "https://www.facebook.com/artiee.who", label: "Facebook" },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/art-jade-israel-70b2473a2?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      label: "LinkedIn",
    },
  ];

  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__intro">
        <span>Contact</span>
        <h2>Let's connect about internship, school projects, or system work.</h2>
      </div>

      <div className="footer-grid">
        <div className="contact-stack">
          <a href="mailto:artieewho@gmail.com">
            <Mail size={20} />
            artieewho@gmail.com
          </a>
          <a href="tel:+639762134983">
            <Phone size={20} />
            +63 976 213 4983
          </a>
          <span>
            <MapPin size={20} />
            Balintawak Aurora, Zamboanga Del Sur
          </span>
          <div className="social-row">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.url} aria-label={social.label}>
                  <Icon size={19} />
                </a>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email"
            required
          />
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Your message"
            rows={4}
            required
          />
          <button type="submit" className="btn btn-primary">
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>

      <p className="footer-credit">© 2026 Art Jade Israel. All rights reserved.</p>
    </footer>
  );
}
