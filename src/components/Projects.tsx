import { Card, Button, Pill } from "@tomny-dev/uzi";
import styles from "./Projects.module.css";
import {
  Package,
  Github,
  ExternalLink,
  Rocket,
  Layers,
  Palette,
  LayoutGrid,
} from "lucide-react";

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
    title: "My Portfolio Website",
    description:
      "This website is built with React, TypeScript, Vite, and the @tomny-dev/uzi component library — serving as a live showcase of what uzi can do.",
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
      { text: "Source Code", link: "https://github.com/tomny-dev/tomny.dev" },
      { text: "Deployed Site", link: "https://tomny.dev" },
    ],
  },
];

const features = [
  {
    icon: <Package size={24} />,
    title: "Button Variants",
    description: "primary, secondary, outline, ghost, destructive, and link styles.",
    code: '<Button variant="primary">Click me</Button>',
  },
  {
    icon: <Layers size={24} />,
    title: "Card Tones",
    description: "default, muted, and contrast tones with configurable padding.",
    code: '<Card tone="muted" padding="md">Content here</Card>',
  },
  {
    icon: <Palette size={24} />,
    title: "Pill Colors",
    description: "neutral, success, warning, info, and danger tones for status badges.",
    code: '<Pill tone="success" size="md">Active</Pill>',
  },
  {
    icon: <LayoutGrid size={24} />,
    title: "TopBar Layout",
    description: "Three-column navbar with brand, center content, and actions.",
    code: '<TopBar brand="my-app" showThemeToggle />',
  },
];

const Projects = () => {
  return (
    <section className={styles.section}>
      {/* uzi Features Showcase */}
      <div className={styles.showcase}>
        <h2 className={styles.showcaseTitle}>
          <Rocket size={28} /> Built with @tomny-dev/uzi
        </h2>
        <p className={styles.showcaseSubtitle}>
          This site showcases the rapid-fire React component library I built. Here are some of its features:
        </p>
        <div className={styles.featuresGrid}>
          {features.map((feature, i) => (
            <Card key={i} tone="muted" padding="md" interactive>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.description}</p>
              <pre className={styles.codeSnippet}>{feature.code}</pre>
            </Card>
          ))}
        </div>
        <div className={styles.quickstart}>
          <h3>Quick Start</h3>
          <pre className={styles.installCode}>pnpm add @tomny-dev/uzi</pre>
          <p>
            <a href="https://github.com/tomny-dev/uzi" target="_blank" rel="noopener noreferrer">
              <Github size={16} /> GitHub
            </a>
            {" | "}
            <a href="https://www.npmjs.com/package/@tomny-dev/uzi" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} /> npm
            </a>
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className={styles.projects}>
        <h2 className={styles.title}>Featured Projects</h2>
        {projects.map((project, i) => (
          <Card key={i} tone="default" padding="none" interactive>
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
                {project.buttons?.map((button) => (
                  <Button key={button.text} href={button.link} target="_blank" variant="primary">
                    {button.text}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
