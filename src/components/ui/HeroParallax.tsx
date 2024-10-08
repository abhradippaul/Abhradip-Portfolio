import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/data";
import { useRef } from "react";

const imageUrl = process.env.NEXT_PUBLIC_CLOUDINARY_URL;

const HeroParalax = () => {
  const firstRow = projects.reverse().slice(0, 3);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="min-h-[200dvh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        {firstRow.length && (
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
            {firstRow.map(
              (product) =>
                product.title && (
                  <ProductCard
                    product={product}
                    translate={translateX}
                    key={product?.id}
                  />
                )
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default HeroParalax;

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        A small selection of <br />{" "}
        <span className="text-purple"> recent projects </span>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    id: number;
    title: string;
    des: string;
    image: string;
    videoLink: string;
    iconLists: string[];
    link: string;
    category: string;
    techStack: string[];
  };
  translate?: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={`/project/${product.id}`}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={`${imageUrl}/w_1000/q_auto/f_auto/portfolio/projects${product.image}`}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
        <div className="absolute left-4 right-0 bottom-0 flex items-center justify-between z-10">
          <div className="flex items-center">
            {product.iconLists.map((icon) => (
              <Image
                key={icon}
                src={`${imageUrl}/w_50/q_auto/f_auto/v1/portfolio/icons${icon}`}
                height="40"
                width="40"
                alt={icon}
                className="p-2"
              />
            ))}
          </div>
        </div>
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-12 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
