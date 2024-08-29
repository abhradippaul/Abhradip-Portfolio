import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import { GoProject } from "react-icons/go";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhradip Paul",
  description:
    "Abhradip Paul, a 22-year-old professional with expertise in both frontend and backend development, as well as Amazon Web Services (AWS). With a strong foundation in Next.js, React.js, JavaScript, TypeScript, Node.js, Redis, MySQL, PostgreSQL and MongoDB. Abhradip has successfully delivered various projects showcasing his proficiency in these technologies. He is well-versed in utilizing AWS services to optimize application performance and scalability. Proficient in version control using Git and GitHub, Abhradip ensures seamless collaboration and code management. Additionally, he possesses knowledge in Linux, Nginx, and Docker, further enhancing his ability to deploy and maintain robust web applications.",
};

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <GoProject className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav
            navItems={navItems}
            className="min-w-[200px] gap-x-4 py-4"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
