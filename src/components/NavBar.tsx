import { TopBar } from "@tomny-dev/uzi";

export default function NavBar() {
  return (
    <>
      <style>{`
        .tomny-topbar > :first-child {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }
      `}</style>
      <div className="tomny-topbar" data-uzi-topbar>
        <TopBar
          brand="tomny.dev"
          brandingLocation="center"
          showThemeToggle
        />
      </div>
    </>
  );
}
