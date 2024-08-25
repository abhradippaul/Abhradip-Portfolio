import FeedbackForm from "./FeedbackForm";
// import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";

async function Clients() {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/feedback`
  // );
  // const data = (await response.json()) as { name: string; text: string }[];
  return (
    <div className="py-20" id="projects">
      <h1 className="text-center text-2xl font-bold my-4">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center w-full">
        <div className="min-h-[50vh] md:h-[30rem] rounded-[10px] flex flex-col antialiased items-center relative overflow-hidden">
          {/* <InfiniteMovingCards items={data} direction="right" speed="slow" /> */}
        </div>
        <FeedbackForm />
      </div>
    </div>
  );
}

export default Clients;
