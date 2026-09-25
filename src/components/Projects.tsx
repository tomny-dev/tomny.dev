import { Button, Card, Inline, PageContainer, Pill, SectionHeader, Stack, Surface } from "@tomny-dev/uzi";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Uzi",
    description:
      "A lightweight React design system I built to standardize UI across my projects. Uzi provides reusable primitives, application scaffolding, responsive layouts, built-in theming, higher-level templates, Storybook documentation, and an MCP server that helps coding agents discover and use the component library consistently.",
    technologies: [
      "React",
      "TypeScript",
      "Radix UI",
      "CSS Modules",
      "Storybook",
      "Vite",
      "Design System",
      "MCP",
    ],
    image: null,
    showcaseLabel: "UZI",
    showcaseCaption: null,
    buttons: [
      { text: "Source Code", link: "https://github.com/tomny-dev/uzi" },
      { text: "View Storybook", link: "https://uzi-storybook.pages.dev" },
    ],
  },
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
    showcaseLabel: null,
    showcaseCaption: null,
    buttons: [{ text: "View Site", link: "https://blockchainrpg.io" }],
  },
  {
    title: "Tultr",
    description:
      "A modern game guides and knowledge platform built with Next.js and Uzi. Tultr combines structured game data, editorial content, and reusable search and discovery tooling in a modular application deployed on Cloudflare Workers with Workers Static Assets.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "@tomny-dev/uzi",
      "Cloudflare Workers",
      "Workers Static Assets",
      "Game Guides",
      "Content Platform",
    ],
    image: "/tultr.jpg",
    showcaseLabel: null,
    showcaseCaption: null,
    buttons: [{ text: "View Site", link: "https://tultr.com" }],
  },
  {
    title: "tomny.dev",
    description:
      "My personal portfolio and a live production showcase for Uzi. Built as a lightweight React and TypeScript application with Vite, it demonstrates the design system in a real site while staying fast, responsive, theme-aware, and continuously deployed on Cloudflare Pages.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "@tomny-dev/uzi",
      "Cloudflare Pages",
      "Responsive UI",
      "Open Source",
    ],
    image: null,
    showcaseLabel: "tomny.dev",
    showcaseCaption: "PERSONAL PORTFOLIO",
    buttons: [
      { text: "Source Code", link: "https://github.com/tomny-dev/tomny.dev" },
      { text: "Visit Site", link: "https://tomny.dev" },
    ],
  },
];

const Projects = () => {
  return (
    <section aria-label="Featured projects">
      <PageContainer maxWidth="md" className="portfolio-section">
        <Surface level="subtle" padding="lg" radius="lg">
          <Stack gap="lg">
            <SectionHeader title="Featured Projects" />

            <div className="projects-grid">
              {projects.map((project) => (
                <Card key={project.title} as="article" padding="none" className="project-card">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                    />
                  ) : (
                    <div className="project-image project-showcase" aria-hidden="true">
                      {project.showcaseCaption ? (
                        <span className="project-showcase-caption">
                          {project.showcaseCaption}
                        </span>
                      ) : null}
                      <span className="project-showcase-label">{project.showcaseLabel}</span>
                    </div>
                  )}

                  <div className="project-content">
                    <Stack gap="md">
                      <div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                      </div>

                      <Inline gap="sm" wrap>
                        {project.technologies.map((tech) => (
                          <Pill key={tech} size="sm">
                            {tech}
                          </Pill>
                        ))}
                      </Inline>

                      <Inline gap="sm" wrap className="project-actions">
                        {project.buttons.map((button) => {
                          const isSourceCode = button.text === "Source Code";
                          const Icon = isSourceCode ? Github : ExternalLink;

                          return (
                            <Button
                              key={button.link}
                              as="a"
                              href={button.link}
                              target="_blank"
                              rel="noreferrer"
                              variant={isSourceCode ? "outline" : "primary"}
                            >
                              <Icon size={16} aria-hidden="true" />
                              {button.text}
                            </Button>
                          );
                        })}
                      </Inline>
                    </Stack>
                  </div>
                </Card>
              ))}
            </div>
          </Stack>
        </Surface>
      </PageContainer>
    </section>
  );
};

export default Projects;
