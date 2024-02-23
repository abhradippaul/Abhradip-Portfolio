import { useState } from "react";

type valueProps = {
    name :string,
    text : string
}

function ContactCard({name,text} : valueProps) {
  const [value,setValue] = useState({})
  const [userName,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [userText,setUserText] = useState("")
  console.log(value)
  return (
    <div className={`w-[90%] max-w-[600px] min-h-96 flex flex-col bg-white justify-around py-4 px-8 rounded-md ${name==="Contact"? "dark:bg-slate-950":"dark:bg-slate-900"} `}>
      <h1 className="text-center text-xl">{name} Form</h1>
        <div className="text-lg w-full flex items-center justify-between">
            <label htmlFor="name">Name : </label>
            <input className="w-[70%] bg-slate-100 outline-none border-none px-2 py-1 rounded-sm dark:text-black" type="text" value={userName} id="name" onChange={(e) => {
              setUserName(e.target.value)
            }} />
        </div>
        <div className="text-lg w-full flex items-center justify-between">
            <label htmlFor="email">Email : </label>
            <input className="w-[70%] bg-slate-100 outline-none border-none px-2 py-1 rounded-sm dark:text-black" placeholder={name==="Review"?"Optional":""} type="text" id="email" value={email} onChange={(e) => {
              setEmail(e.target.value)
            }} />
        </div>
        <div className="text-lg w-full flex items-center justify-between">
            <label htmlFor="text">{text} : </label>
            <textarea className="w-[70%] bg-slate-100 outline-none border-none px-2 py-1 dark:text-black rounded-sm" id="text" value={userText} onChange={(e) => {
              setUserText(e.target.value)
            }} />
        </div>
        <button className="bg-blue-600 w-1/2 mx-auto text-white text-xl py-2 m-4 rounded-md hover:bg-blue-700" onClick={() => {
          setValue({
            userName,
            email,
            userText
          })
          setUserName("")
          setEmail("")
          setUserText("")
        }}>Submit</button>
    </div>
  );
}

export default ContactCard;
