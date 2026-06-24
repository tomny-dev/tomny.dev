import { TopBar } from "@tomny-dev/uzi";

export default function NavBar() {
  return (
    <>
      <style>{`
        body > *:first-child {
          margin-top: 0 !important;
        }
        .tomny-topbar [class*="topBarInner"] {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }
      `}</style>
      <div className="tomny-topbar">
        <TopBar
          brand="tomny.dev"
          brandingLocation="center"
          showThemeToggle
        />
      </div>
    </>
  );
}
