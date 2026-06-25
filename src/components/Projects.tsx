import { Card, Button, Pill } from "@tomny-dev/uzi";
import { Github } from "lucide-react";
import styles from "./Projects.module.css";

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
    <section className={styles.section}>
      <div className={styles.projects}>
        <h2 className={styles.title}>Featured Projects</h2>
        {projects.map((project, i) => (
          <Card key={i} tone="default" padding="none" className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              <div className={styles.techPills}>
                {project.technologies.map((tech, j) => (
                  <Pill key={j} tone="neutral" size="sm">{tech}</Pill>
                ))}
              </div>
              <div className={styles.projectButtons}>
                {project.buttons?.map((button) => {
                  const isGitHub = (() => {
                    try { return new URL(button.link).hostname.includes("github.com"); }
                    catch { return false; }
                  })();
                  return (
                    <Button key={button.link} variant="primary" asChild>
                      <a href={button.link} target="_blank" rel="noopener noreferrer">
                        {isGitHub && <Github className={styles.githubIcon} />}
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
