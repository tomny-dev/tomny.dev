import { TopBar } from "@tomny-dev/uzi";

export default function NavBar() {
  return (
    <>
      <style>{`
        .tomny-topbar [class*="topBarInner"] {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }
        .tomny-topbar [class*="topBarBrand"] {
          font-size: 1rem !important;
          font-weight: 600 !important;
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
