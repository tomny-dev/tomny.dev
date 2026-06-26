import { Card, Button, Pill } from "@tomny-dev/uzi";
import { Github } from "lucide-react";

const projects = [
  {
    title: "BlockchainRPG",
    description:
      "A decentralized blockchain game where players can fight monsters, craft items, and collect digital tokens and NFTs.",
    technologies: [
      "Unity",
      "React",
      "Web3",
      "Node.js",
      "EOSIO",
      "Blockchain",
      "PlayFab",
      "Full Stack",
    ],
    image: "/blockchainrpg.jpg",
    buttons: [{ text: "View Site", link: "https://blockchainrpg.io" }],
  },
  {
    title: "Tultr",
    description: "A self hosted forum built with Flarum, MariaDB, and Docker.",
    technologies: ["Flarum", "MariaDB", "Docker", "Blog", "Website"],
    image: "/tultr.jpg",
    buttons: [{ text: "View Site", link: "https://tultr.com" }],
  },
  {
    title: "@tomny-dev/uzi",
    description:
      "A lightweight, rapid-fire React component library built on Radix UI primitives. Includes Button, Card, Avatar, Modal, and more — with built-in theming and zero bloat.",
    technologies: [
      "React",
      "TypeScript",
      "Radix UI",
      "npm",
      "CSS Modules",
      "Theming",
      "Component Library",
    ],
    image: "/portfolio.jpg",
    buttons: [
      { text: "GitHub", link: "https://github.com/tomny-dev/uzi" },
      { text: "npm", link: "https://www.npmjs.com/package/@tomny-dev/uzi" },
    ],
  },
  {
    title: "My Portfolio Website",
    description:
      "This website is built with React, TypeScript, Vite, and the @tomny-dev/uzi component library.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "@tomny-dev/uzi",
      "CSS Modules",
      "Cloudflare Pages",
      "GitHub",
      "Node.js",
    ],
    image: "/portfolio.jpg",
    buttons: [
      { text: "GitHub", link: "https://github.com/tomny-dev/tomny.dev" },
      { text: "Deployed Site", link: "https://tomny.dev" },
    ],
  },
];

const Projects = () => {
  return (
    <section style={{ padding: "2rem 0", backgroundColor: "var(--uzi-background)" }}>
      <div style={{ maxWidth: "64rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "2.5rem", textAlign: "center" }}>
          Featured Projects
        </h2>
        {projects.map((project, i) => (
          <Card key={i} tone="default" padding="none" style={{ marginBottom: "2rem", transition: "transform 0.2s ease, box-shadow 0.2s ease" }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "16rem", objectFit: "cover", borderRadius: "8px 8px 0 0" }}
            />
            <div style={{ padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{project.title}</h3>
              <p style={{ color: "var(--uzi-text-secondary)", marginBottom: "1rem", lineHeight: "1.6" }}>{project.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                {project.technologies.map((tech, j) => (
                  <Pill key={j} tone="neutral" size="sm">{tech}</Pill>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {project.buttons?.map((button) => {
                  const isGitHub = (() => {
                    try { return new URL(button.link).hostname.includes("github.com"); }
                    catch { return false; }
                  })();
                  return (
                    <Button key={button.link} variant="primary" asChild>
                      <a href={button.link} target="_blank" rel="noopener noreferrer">
                        {isGitHub && <Github style={{ marginRight: "0.375rem", height: "1rem", width: "1rem" }} />}
                        {button.text}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
