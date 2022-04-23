import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";
import {
  GrDocumentDownload,
  GrLocation,
  GrGithub,
  GrLinkedin,
} from "react-icons/gr";
import { ImMobile } from "react-icons/im";
import { MdLocationOn, MdOutlineAlternateEmail } from "react-icons/md";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const themeToggler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        src="/1649559312468.jpg"
        alt="my image"
        width={200}
        height={200}
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h3 className="my-4 text-3xl text-yellow font-medium tracking-wider font-Courgette">
        <span className="text-dblue">Irshad </span>
        Muhammad
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-300 rounded-full text-dblue">
        Full-Stack Developer
      </p>
      <Link href="/">
        <a className="flex items-center justify-around py-1 px-2 my-3 bg-gray-300 rounded-full text-bblue">
          <FaDownload className="h-6 w-6 text-orange" />
          <h6>Download Resume</h6>
        </a>
      </Link>
      <Link href="/">
        <a className="flex items-center text-orange justify-center py-1 px-2 my-3 bg-gray-300 rounded-full">
          <GrGithub className="h-8 w-8 mr-4 cursor-pointer" />
          <GrLinkedin className="h-8 w-8 ml-4 cursor-pointer" />
        </a>
      </Link>

      <div className="my-5 py-4 bg-gray-300 rounded-3xl">
        <div className="flex items-center justify-center py-2 ">
          <MdLocationOn className="w-8 h-8 text-orange" />
          <h6 className="text-bblue">Copenhagen, DK</h6>
        </div>
        <p className="flex items-center justify-center py-2 text-bblue">
          <MdOutlineAlternateEmail className="w-8 h-8 text-orange" />
          imabbasi@msn.com
        </p>
        <p className=" text-bblue flex items-center justify-center py-2">
          <ImMobile className="w-8 h-8 text-orange" />
          +4560888636
        </p>
      </div>
      <button
        className="bg-gradient-to-r from-blue-400 to-green-300 w-12/12 py-2 px-5 rounded-full my-3"
        onClick={() => window.open("mailto:imabbasi@msn.com")}
      >
        Email me
      </button>
      <button
        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-12/12 py-2 px-5 rounded-full my-2 text-white font-bold"
        onClick={themeToggler}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
