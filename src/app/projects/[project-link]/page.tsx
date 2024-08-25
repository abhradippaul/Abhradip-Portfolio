import { projects } from "@/data/data";

interface Props {
  params: {
    "project-link": string;
  };
}

function Project({ params }: Props) {
  const projectInfo = projects.find(
    ({ link }) => link === `/${params["project-link"]}`
  );

  const imageUrl = process.env.NEXT_PUBLIC_CLOUDINARY_URL;

  return (
    <header className="relative bg-black-100 flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-dvh">
      <div className="max-w-7xl w-full mx-auto">
        <div className="py-12">
          <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 right-0 flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          </div>
          <div className="w-full min-h-[80dvh] flex items-center flex-col gap-y-12 relative">
            <h1 className="text-4xl">{projectInfo?.title}</h1>
            {projectInfo?.videoLink ? (
              <iframe
                width="560"
                height="315"
                src={projectInfo?.videoLink}
                title="YouTube video player"
                className="max-w-[95%]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={`${imageUrl}/w_500/q_auto/f_auto/v1/portfolio/projects${projectInfo?.image}`}
                className="w-[560px] h-[315px] max-w-[95%]"
              />
            )}
            <p className="text-zinc-200">{projectInfo?.des}</p>
            <div className="w-full md:px-10 px-2">
              <h3 className="text-xl my-2">Tech Stack</h3>
              <ul className="text-zinc-200 text-lg">
                {projectInfo?.techStack?.map((e, i) => {
                  const tempArr = e.split(":");
                  return (
                    <li
                      className="flex items-center justify-between"
                      key={tempArr[0]}
                    >
                      <div className="flex gap-x-4 my-1">
                        <span className="font-semibold">{tempArr[0]}</span> :{" "}
                        <span>{tempArr[1]}</span>
                      </div>
                      <img
                        src={`${imageUrl}/w_50/q_auto/f_auto/v1/portfolio/icons${projectInfo.iconLists[i]}`}
                        alt="image"
                        className="size-8"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            {projectInfo?.liveLink && (
              <div className="w-full text-xl font-semibold flex items-center justify-between md:px-10 px-2">
                <span>Live Demo :</span>
                <a
                  href={projectInfo?.liveLink}
                  className="text-base font-normal hover:underline"
                  target="_blank"
                >
                  {projectInfo?.liveLink}
                </a>
              </div>
            )}
            <div className="w-full text-xl font-semibold flex items-center justify-between md:px-10 px-2">
              <span>GitHub :</span>
              <div className="flex flex-col gap-y-4">
                {projectInfo?.gitHubLink?.split(" ").map((e) => (
                  <a
                    key={e}
                    href={e}
                    className="text-base font-normal hover:underline"
                    target="_blank"
                  >
                    {e}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Project;
