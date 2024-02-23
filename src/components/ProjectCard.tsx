type valueProps = {
  name: string;
  category: string;
  description: string;
  image: string;
  githubLink: string;
  websiteLink: string;
};

function ProjectCard({
  name,
  category,
  description,
  image,
  githubLink,
  websiteLink,
}: valueProps) {
  return (
    <div className="h-96 w-72 rounded-md bg-white p-4 flex flex-col items-center justify-between m-4 relative dark:bg-slate-900 dark:shadow-slate-700">
      <div className="absolute px-2 rounded-t-sm top-[50%] z-10 bg-white translate-y-[-100%] font-semibold dark:bg-slate-950">
        {category.toUpperCase()}
      </div>
      <div className="w-full h-[50%] rounded-md overflow-hidden relative child-hover:opacity-100 cursor-pointer border">
        <div className="absolute top-0 bottom-0 left-0 right-0 md:opacity-0 bg-black bg-opacity-50">
        <a href={websiteLink} target="_blank"><i className="fa-solid fa-link text-white absolute left-[30%] top-[45%] text-2xl">  </i></a>
          <a href={githubLink} target="_blank"><i className="fa-brands fa-github text-white absolute right-[30%] top-[45%] text-2xl">  </i></a>
        </div>
        <img
          className="h-full w-full object-cover"
          loading="lazy"
          src={image}
          alt={name}
        />
      </div>
      <h1 className="text-3xl my-2">{name}</h1>
      <div className="overflow-hidden">
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
