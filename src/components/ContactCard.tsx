import { postData } from "@/fetch";
import { useState } from "react";

type valueProps = {
  name: string;
  text: string;
};
type UserValue = {
  userName: string;
  email: string;
  userText: string;
};

function ContactCard({ name, text }: valueProps) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userText, setUserText] = useState("");
  const submitData = async ({ userName, email, userText }: UserValue) => {
    if (name === "Contact") {
      const response = await postData("/contact", {
        name : userName,
        email,
        text : userText,
      });
      console.log(response);
    } else {
      const response = await postData("/feedback", {
        name : userName,
        email,
        text : userText,
      });
      // console.log(response);
      // location.reload()
    }
  };
  return (
    <form
      className={`w-[90%] max-w-[600px] min-h-96 flex flex-col bg-white justify-around py-4 px-8 rounded-md ${
        name === "Contact" ? "dark:bg-slate-950" : "dark:bg-slate-900"
      } `}
      onSubmit={(e) => {
        e.preventDefault();
        submitData({
          userName,
          email,
          userText,
        });
        setUserName("");
        setEmail("");
        setUserText("");
      }}
    >
      <h1 className="text-center text-xl">{name} Form</h1>
      <div className="text-lg w-full flex items-center justify-between">
        <label htmlFor="name">Name : </label>
        <input
          className="w-[70%] bg-slate-100 outline-none border-none px-2 py-1 rounded-sm dark:text-black"
          type="text"
          value={userName}
          name="name"
          required
          id="name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="text-lg w-full flex items-center justify-between">
        <label htmlFor="email">Email : </label>
        <input
          className="w-[70%] bg-slate-100 outline-none border-none px-2 py-1 rounded-sm dark:text-black"
          placeholder={name === "Review" ? "Optional" : ""}
          type="text"
          id="email"
          name="email"
          required={name === "Contact" ? true : false}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="text-lg w-full flex items-center justify-between">
        <label htmlFor="text">{text} : </label>
        <textarea
          className="w-[70%] bg-slate-100 outline-none border-none px-2 py-1 dark:text-black rounded-sm"
          required
          id="text"
          name="text"
          value={userText}
          onChange={(e) => {
            setUserText(e.target.value);
          }}
        />
      </div>
      <button className="bg-blue-600 w-1/2 mx-auto text-white text-xl py-2 m-4 rounded-md hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}

export default ContactCard;
