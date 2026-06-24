import { Avatar, AvatarImage, AvatarFallback, Pill, Card } from "@tomny-dev/uzi";
import styles from "./About.module.css";

const techChips = [
  "React",
  "TypeScript",
  "Vite",
  "CSS Modules",
  "Radix UI",
  "@tomny-dev/uzi",
  "Node.js",
  "Unity / Godot",
  "EOSIO",
  "Web3",
  "DevOps",
  "AI",
  "Cloud Computing",
  "Python",
  "Homelab",
  "Automation",
];

const About = () => {
  return (
    <section className={styles.section}>
      <Card tone="default" padding="lg">
        <div className={styles.header}>
          <Avatar size="lg">
            <AvatarImage src="/turtle.jpg" alt="Tom" />
            <AvatarFallback>T</AvatarFallback>
          </Avatar>
          <div className={styles.content}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.description}>
              Hey, I&rsquo;m Tom! Nice to meet you! &ldquo;I&rsquo;m a Full Stack Software Developer
              passionate about building systems from the ground up and constantly pushing into new
              technical territory. My curiosity drives me to explore emerging technologies and
              frameworks that challenge my thinking and expand my toolkit.&rdquo;
            </p>
            <p className={styles.description}>
              Lately, I&rsquo;ve been diving into areas like{" "}
              <strong>game development</strong>, <strong>blockchain</strong> systems, and experimenting
              with{" "}
              <strong>AI and machine learning</strong>. I enjoy turning complex ideas into clean,
              functional products &mdash; and I&rsquo;m always learning, always shipping.
            </p>
            <p className={styles.description}>
              I&rsquo;m also the creator of{" "}
              <a href="https://github.com/tomny-dev/uzi" target="_blank" rel="noopener noreferrer">
                <strong>@tomny-dev/uzi</strong>
              </a>{" "}
              &mdash; a lightweight, rapid-fire React component library built on Radix UI primitives.
            </p>
            <h3 className={styles.subtitle}>Current Interests &amp; Tools</h3>
            <div className={styles.pills}>
              {techChips.map((chip, i) => (
                <Pill key={i} tone="neutral" size="md">{chip}</Pill>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default About;
