import { TopBar } from "@tomny-dev/uzi";

export default function NavBar() {
  return (
    <TopBar
      brand={<span className="site-brand">tomny.dev</span>}
      brandHref="/"
      brandingLocation="center"
      isSticky
      showThemeToggle
    />
  );
}
