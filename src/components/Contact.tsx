import ContactCard from "./ContactCard";

function Contact() {
    const form = [
        {
            name : "Contact",
            text : "Reason"
        },
        {
            name : "Feedback",
            text: "Say Something"
        }
    ]
  return (
    <div className=" bg-slate-100">
      <div className="min-h-dvh max-w-7xl m-auto flex items-center justify-around flex-col">
        <h1 className="text-4xl text-gray-700">
          <span className="text-blue-700">Contact</span> or <span className="text-blue-700">Feedback</span>
        </h1>
        <div className="w-full flex items-center justify-around">
          {/* <ContactCard />
          <ContactCard /> */}
          {
          form.map((e) => <ContactCard {...e}/>)
          }

        </div>
      </div>
    </div>
  );
}

export default Contact;
