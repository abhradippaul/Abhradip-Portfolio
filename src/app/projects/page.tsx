import HeroComponentForProject from "./HeroComponentForProject";

function ProjectPage() {
  return (
    <header className="relative bg-black-100 flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-dvh">
      <div className="max-w-7xl w-full mx-auto">
        <HeroComponentForProject />
      </div>
    </header>
  );
}

export default ProjectPage;
