import { motion } from "framer-motion";
type Props = {
  image: string;
  name: string;
  des: string;
};

function Card({ name, image, des }: Props) {
  return (
    <motion.div
      className="w-60 overflow-hidden min-h-96 bg-white flex flex-col items-center justify-around px-4 rounded-lg m-4 cursor-pointer dark:bg-slate-950 dark:shadow-slate-700"
      // initial={{ opacity: 0, x: 75 }}
      // whileInView={{ opacity: 1, x: 0 }}
    >
      <img
        className="w-full h-[40%] object-cover rounded-md"
        src={image}
        alt="image"
      />

      <h1 className="text-xl text-gray-700 font-semibold dark:text-white">
        {name}
      </h1>
      <p className="dark:text-gray-300">{des}</p>
    </motion.div>
  );
}

export default Card;
