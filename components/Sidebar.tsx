import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  GrDocumentDownload,
  GrLocation,
  GrGithub,
  GrLinkedin,
} from "react-icons/gr";
import { ImMobile } from "react-icons/im";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const themeToggler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <img
        src="https://media-exp1.licdn.com/dms/image/C4E03AQGFII3UfCkS7g/profile-displayphoto-shrink_800_800/0/1649559312468?e=1655942400&v=beta&t=Jz0fvfbf-TmyjxW-7LxZGflwPJbzw4s38ielvtxFOpY"
        alt="my image"
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-Courgette">
        <span className="">Irshad </span>
        Muhammad
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-300 rounded-full">
        Full-Stack Developer
      </p>
      <a
        href="/"
        className="flex items-center justify-center py-1 px-2 my-3 bg-gray-300 rounded-full"
      >
        <GrDocumentDownload className="h-8 w-8" />
        Download Resume
      </a>

      <div className="flex justify-center items-center my-5 bg-dblue w-12/12 text-orange md:w-full rounded-full">
        <Link href="/">
          <GrGithub className="h-8 w-8 mr-4 cursor-pointer" />
        </Link>
        <Link href="/">
          <GrLinkedin className="h-8 w-8 ml-4 cursor-pointer" />
        </Link>
      </div>
      <div className="my-5 py-4 bg-gray-300 rounded-3xl bg-dblue text-orange">
        <div className="flex items-center justify-center space-x-2">
          <GrLocation className="w-8 h-8 mr-4" />
          <span>Copenhagen, Denmark</span>
        </div>
        <p className="flex items-center justify-center">
          <MdOutlineAlternateEmail className="w-8 h-8 mr-4" />
          imabbasi@msn.com
        </p>
        <p className="flex items-center justify-center">
          <ImMobile className="w-8 h-8 mr-4" />
          +4560888636
        </p>
      </div>
      <button
        className="bg-gradient-to-r from-blue-400 to-green-300 w-8/12 py-2 px-5 rounded-full my-3"
        onClick={() => window.open("mailto:imabbasi@msn.com")}
      >
        Email me
      </button>
      <button
        className="bg-gradient-to-r from-blue-400 to-green-300 w-8/12 py-2 px-5 rounded-full my-2"
        onClick={themeToggler}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
