import { Pill } from "@tomny-dev/uzi";
import styles from "./Footer.module.css";
import { Github, Rocket } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.branding}>
            <Rocket size={16} />
            <span>Built with</span>
            <a
              href="https://github.com/tomny-dev/uzi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Pill tone="info" size="sm">@tomny-dev/uzi</Pill>
            </a>
          </div>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Tom. All rights reserved.
          </p>
          <div className={styles.links}>
            <a
              href="https://github.com/tomny-dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.npmjs.com/package/@tomny-dev/uzi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="npm"
            >
              npm
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}