import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ContactCard from "./ContactCard";
import { motion } from "framer-motion";
import { fetchingData } from "@/fetch";
import { useEffect, useState } from "react";

function Review() {
  const cardData = { name: "Review", text: "Say Someting" };
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchingData("/feedback").then((value) => {
      setData(value.reverse());
    });
  }, []);
  return (
    <motion.div
      id="review"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="dark:bg-slate-950 bg-slate-200"
    >
      <div className="bg-slate-200 max-w-7xl m-auto min-h-dvh flex items-center justify-around flex-col dark:bg-slate-950  ">
        <h1 className="text-4xl">Review</h1>
        <div className="w-[90%] max-w-[600px]">
          <Carousel>
            <CarouselContent>
              {data.map((e:any) => {
                return (
                  <CarouselItem key={e.text} className="min-h-52 w-full  bg-white dark:bg-slate-900 dark:text-white">
                    <div className="relative flex items-center justify-center w-full h-full p-8">
                      <p>
                        {e.text}
                      </p>
                      <h1 className="absolute bottom-[10%] right-[10%] text-gray-700 dark:text-gray-300">
                        - {e.name}
                      </h1>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
        <ContactCard {...cardData} />
      </div>
    </motion.div>
  );
}

export default Review;
