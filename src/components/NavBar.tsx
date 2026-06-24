import { TopBar } from "@tomny-dev/uzi";
import { Menu, X, Sparkles } from "lucide-react";

interface NavBarProps {
  onShowcaseClick?: () => void;
}

export default function NavBar({ onShowcaseClick }: NavBarProps) {
  return (
    <TopBar
      brand="tomny.dev"
      brandingLocation="center"
      showThemeToggle
      start={<Menu size={20} />}
      center={onShowcaseClick ? (
        <button onClick={onShowcaseClick} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.375rem", color: "inherit", fontSize: "inherit" }}>
          <Sparkles size={16} /> Showcase
        </button>
      ) : undefined}
      actions={<X size={20} />}
    />
  );
}
