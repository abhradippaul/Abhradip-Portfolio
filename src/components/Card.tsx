import { motion, useScroll} from "framer-motion";
type Props = {
  image: string;
};

function Card(props: Props) {
  // const { scrollYProgress } = useScroll();
  // console.log(scrollYProgress)
  return (
    <motion.div
      className="w-60 overflow-hidden min-h-96 bg-white shadow-md flex flex-col items-center justify-around px-4 rounded-lg m-4 cursor-pointer dark:bg-slate-950 dark:shadow-slate-700"
      // style={{scale: scrollYProgress }}
    >
      <img
        className="w-full h-[40%] object-cover rounded-md"
        src={props.image}
        alt="image"
      />

      <h1 className="text-xl text-gray-700 font-semibold dark:text-white">
        Frontend Developer
      </h1>
      <p className="dark:text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        repellendus quas quam impedit in magnam commodi? Tempore quae eligendi
        odit?
      </p>
    </motion.div>
  );
}

export default Card;
