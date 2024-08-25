"use client";

import { useState } from "react";
import MagicButton from "./ui/MagicButton";

function FeedbackForm() {
  const [input, setInput] = useState<
    { name: string; email: string; text: string } | {}
  >({});

  return (
    <div className="my-4 w-full">
      <h1 className="text-center text-xl font-semibold my-4">
        You can give <span className="text-purple"> feedback </span>
      </h1>
      <form
        className="py-6 px-12 w-full  min-h-[50vh] rounded-[10px] mx-auto flex flex-col items-center justify-between"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(input);
        }}
      >
        <div className="w-full flex items-center justify-between">
          <label htmlFor="name">Name : </label>
          <input
            className="rounded-[5px] border border-zinc-500 outline-none bg-slate-900 text-zinc-200 px-2 py-1 w-1/2"
            type="text"
            id="name"
            required
            onChange={(e) =>
              setInput((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className="w-full flex items-center justify-between">
          <label htmlFor="email">Email : </label>
          <input
            className="rounded-[5px] border border-zinc-500 outline-none bg-slate-900 text-zinc-200 px-2 py-1 w-1/2"
            type="email"
            id="email"
            required
            onChange={(e) =>
              setInput((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className="w-full flex items-center justify-between">
          <label htmlFor="text">Feedback : </label>
          <textarea
            className="rounded-[5px] border border-zinc-500 outline-none bg-slate-900 text-zinc-200 px-2 py-1 resize-none w-1/2"
            // cols={30}
            rows={4}
            id="text"
            required
            onChange={(e) =>
              setInput((prev) => ({ ...prev, text: e.target.value }))
            }
          />
        </div>
        <MagicButton>Submit</MagicButton>
      </form>
    </div>
  );
}

export default FeedbackForm;
