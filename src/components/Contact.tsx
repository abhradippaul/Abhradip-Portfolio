import ContactCard from "./ContactCard";
import { motion } from "framer-motion";
function Contact() {
  const form = {
    name: "Contact",
    text: "Reason",
  };
  return (
    <motion.div
      id="contactme"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" bg-slate-100 dark:bg-slate-900"
    >
      <div className="min-h-dvh max-w-7xl m-auto flex items-center justify-around flex-col">
        <h1 className="text-4xl text-blue-700 dark:text-white">Contact Me</h1>
        <div className="w-full flex items-center justify-around">
          <ContactCard {...form} />
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
