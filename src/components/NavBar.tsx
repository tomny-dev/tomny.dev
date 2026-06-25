import { TopBar } from "@tomny-dev/uzi";

export default function NavBar() {
  return (
    <>
      <style>{`
        [data-uzi-topbar] {
          margin: 0 !important;
          padding: 0 !important;
        }
        [data-uzi-topbar] > * {
          margin: 0 !important;
        }
      `}</style>
      <div data-uzi-topbar>
        <TopBar
          brand="tomny.dev"
          brandingLocation="center"
          showThemeToggle
        />
      </div>
    </>
  );
}
