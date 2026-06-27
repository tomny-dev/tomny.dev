import { Avatar, AvatarImage, AvatarFallback, Card, Button, Pill } from "@tomny-dev/uzi";
import { Github } from "lucide-react";

const techPills = [
  "React", "TypeScript", "Node.js", "Unity / Godot", "EOSIO",
  "Web3", "DevOps", "AI", "Cloud Computing", "Python", "Homelab", "Automation",
];

const About = () => {
  return (
    <section style={{ padding: "2rem 0", backgroundColor: "var(--uzi-background)" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <Card tone="default" padding="lg">
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
            <Avatar size="lg" style={{ width: "120px", height: "120px" }}>
              <AvatarImage src="/turtle.jpg" alt="Tom" />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
          </div>
          <h2 style={{ fontSize: "2rem", marginBottom: "0.25rem", textAlign: "center" }}>
            Hey, I&rsquo;m Tom!
          </h2>
          <p style={{ color: "var(--uzi-text-secondary)", fontSize: "1.125rem", marginBottom: "1.25rem", textAlign: "center" }}>
            Full Stack Software Developer
          </p>
          <p style={{ color: "var(--uzi-text-secondary)", lineHeight: "1.7", marginBottom: "1rem", maxWidth: "48rem", margin: "0 auto 1rem auto", textAlign: "center" }}>
            I build systems from the ground up and love exploring new technical territory.
            Lately, I&rsquo;ve been diving into <strong>game development</strong>,{" "}
            <strong>blockchain</strong> systems, and <strong>AI/ML</strong>. I enjoy turning
            complex ideas into clean, functional products — and I&rsquo;m always learning,
            always shipping.
          </p>
          <p style={{ color: "var(--uzi-text-secondary)", fontSize: "1rem", marginBottom: "0.75rem", textAlign: "center", fontWeight: 500 }}>
            Current Interests & Tools
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
            {techPills.map((tech) => (
              <Pill key={tech} tone="neutral" size="sm">{tech}</Pill>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1.25rem" }}>
            <Button variant="primary" asChild>
              <a
                href="https://github.com/tomny-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={18} /> View my GitHub
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
