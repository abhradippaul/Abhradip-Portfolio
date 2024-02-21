type skillProps = {
  name: string
  image: string
};

function SkillCard({ name, image }: skillProps) {
  return (
    <div className="h-32 w-32 md:h-44 md:w-44 flex items-center flex-col justify-center m-4">
      <div className="h-3/4 w-3/4 bg-red-400 bg-opacity-20 flex items-center justify-center overflow-hidden rounded-full">
        <div className="w-1/2 h-1/2">
          <img className="object-cover" src={image} alt="html" />
        </div>
      </div>
      <h1 className="font-semibold text-lg">{name}</h1>
    </div>
  );
}

export default SkillCard;
