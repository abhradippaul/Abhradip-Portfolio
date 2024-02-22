import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ContactCard from "./ContactCard";

function Review() {
  const cardData = {name:"Review", text: "Say Someting"}
  return (
    <div className="dark:bg-slate-950 bg-slate-200">
      <div className="bg-slate-200 max-w-7xl m-auto min-h-dvh flex items-center justify-around flex-col dark:bg-slate-950  ">
        <h1 className="text-4xl">Review</h1>
        <div className="w-[90%] max-w-[600px]">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="min-h-52 w-full  bg-white dark:bg-slate-900 dark:text-white">
                <div className="relative flex items-center justify-center w-full h-full p-8">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores odio ipsam quod accusamus obcaecati, hic repellendus. Eos eum inventore, unde facere vitae veritatis ipsa, corporis, a ipsum natus ullam et!</p>
                  <h1 className="absolute bottom-[10%] right-[10%] text-gray-700 dark:text-gray-300">- Abhradip Paul</h1>
                </div>
              </CarouselItem>
              <CarouselItem>Review2</CarouselItem>
              <CarouselItem>Review3</CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
        <ContactCard {...cardData} />
      </div>
    </div>
  );
}

export default Review;
