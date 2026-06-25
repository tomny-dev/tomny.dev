import { Avatar, AvatarImage, AvatarFallback, Card, Button } from "@tomny-dev/uzi";
import styles from "./About.module.css";
import { Github } from "lucide-react";

const About = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Card tone="default" padding="lg">
          <div className={styles.avatarWrapper}>
            <Avatar size="lg" className={styles.avatar}>
              <AvatarImage src="/turtle.jpg" alt="Tom" />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
          </div>
          <h2 className={styles.title}>Hey, I&rsquo;m Tom!</h2>
          <p className={styles.subtitle}>Full Stack Software Developer</p>
          <p className={styles.description}>
            I build systems from the ground up and love exploring new technical territory.
            Lately, I&rsquo;ve been diving into <strong>game development</strong>,{" "}
            <strong>blockchain</strong> systems, and <strong>AI/ML</strong>. I enjoy turning
            complex ideas into clean, functional products — and I&rsquo;m always learning,
            always shipping.
          </p>
          <div className={styles.cta}>
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
