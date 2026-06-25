import { TopBar } from "@tomny-dev/uzi";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.topBar}>
      <TopBar
        brand="tomny.dev"
        brandingLocation="center"
        showThemeToggle
        innerClassName={styles.topBarInner}
      />
    </div>
  );
}
