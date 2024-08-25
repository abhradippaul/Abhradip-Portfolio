import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data/data";

function Footer() {
  return (
    <footer className="w-full pt-20 pb-10">
      {/* <div className="w-full absolute left-0 -bottom-72 lg:-bottom-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="size-full opacity-50"
        />
      </div> */}
      <div className="flex flex-col items-center">
        <h1 className="text-2xl">
          Ready to take <span className="text-purple">your</span> digital
          presence to next level?{" "}
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Reach out to me today and let's discuss how can I help your goals.
        </p>
        <a href="mailto:abhradippaulwork@gmail.com">
          <MagicButton icon={<FaLocationArrow />} position="right">
            Let's get in touch
          </MagicButton>
        </a>
      </div>
      <div className="flex items-center justify-center md:gap-3 gap-6 mt-10">
        {socialMedia.map(({ id, img, link }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            className="size-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-[10px] border-black-300"
          >
            <img src={img} alt={img} className="size-[20px]" />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
