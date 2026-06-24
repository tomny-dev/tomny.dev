import { TopBar } from "@tomny-dev/uzi";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  return (
    <TopBar
      brand="tomny.dev"
      brandingLocation="center"
      showThemeToggle
      start={<Menu size={20} />}
      actions={<X size={20} />}
    />
  );
}
