type valueProps = {
    name :string,
    text : string
}

function ContactCard({name,text} : valueProps) {
  return (
    <div className="w-[90%] max-w-[600px] min-h-96 flex flex-col bg-white justify-around py-4 px-8 rounded-md">
      <h1 className="text-center text-xl">{name} Form</h1>
        <div className="text-lg w-full flex items-center justify-between">
            <label htmlFor="name">Name : </label>
            <input className="w-[70%] bg-slate-100 outline-none border-none px-2 py-1 rounded-sm" type="text" id="name" />
        </div>
        <div className="text-lg w-full flex items-center justify-between">
            <label htmlFor="email">Email : </label>
            <input className="w-[70%] bg-slate-100 outline-none border-none px-2 py-1 rounded-sm" type="text" id="email" />
        </div>
        <div className="text-lg w-full flex items-center justify-between">
            <label htmlFor="text">{text} : </label>
            <textarea className="w-[70%] bg-slate-100 outline-none border-none px-2 py-1 rounded-sm" id="text" />
        </div>
        <button className="bg-blue-600 w-1/2 mx-auto text-white text-xl py-2 m-4 rounded-md hover:bg-blue-700">Submit</button>
    </div>
  );
}

export default ContactCard;
