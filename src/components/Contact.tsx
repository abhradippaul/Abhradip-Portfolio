import ContactCard from "./ContactCard";

function Contact() {
  const form = {
    name: "Contact",
    text: "Reason",
  };
  return (
    <div className=" bg-slate-100 dark:bg-slate-900">
      <div className="min-h-dvh max-w-7xl m-auto flex items-center justify-around flex-col">
        <h1 className="text-4xl text-blue-700 dark:text-white">Contact Me</h1>
        <div className="w-full flex items-center justify-around">
          <ContactCard {...form} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
