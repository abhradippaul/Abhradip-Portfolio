import { cn } from "@/lib/utils";

interface Props {
  title: string;
  className?: string;
  handleClick?: () => void;
}
function CategoryButton({ title, className, handleClick }: Props) {
  return (
    <button className="p-[3px] relative" onClick={handleClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-800 rounded-[10px]" />
      <div
        className={cn(
          "px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent",
          className
        )}
      >
        {title}
      </div>
    </button>
  );
}

export default CategoryButton;
