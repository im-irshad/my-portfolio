import { motion } from "framer-motion";
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
import { RiGitBranchFill } from "react-icons/ri";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const themeToggler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const pathVariant = {
    hidden: {
      opacity: 0,
      pathLength: 0.9,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  const svgVariant = {
    hidden: { rotate: 180 },
    visible: {
      rotate: 0,
      transition: { duration: 1 },
    },
  };
  const linkVariants = {
    // visible: {
    // x: [0, -20, 20, -20, 20, 0],
    // transition: { delay: 2 },
    //  },
    hover: {
      scale: [1, 1.1, 1, 1.1, 1, 1.1],
      textShadow: "0px 0px 8px rgb(0,0,0)",
      boxShadow: "0px 0px 8px rgb(0,0,0)",
    },
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
      <motion.h3
        variants={linkVariants}
        animate="visible"
        whileHover="hover"
        className="my-4 text-3xl text-yellow font-medium tracking-wider font-Courgette"
      >
        <span className="text-dblue">Irshad </span>
        Muhammad
      </motion.h3>
      <motion.p
        variants={linkVariants}
        animate="visible"
        whileHover="hover"
        className="px-2 py-1 my-3 bg-gray-300 rounded-full text-dblue"
      >
        Full-Stack Developer
      </motion.p>
      <Link href="/">
        <motion.a
          variants={linkVariants}
          animate="visible"
          whileHover="hover"
          className="flex items-center justify-around py-1 px-2 my-3 bg-gray-300 rounded-full text-bblue"
        >
          <FaDownload className="h-6 w-6 text-orange" />
          <h6>Download Resume</h6>
        </motion.a>
      </Link>
      <Link href="/">
        <motion.a
          variants={linkVariants}
          animate="visible"
          whileHover="hover"
          className="flex items-center text-orange justify-center py-1 px-2 my-3 bg-gray-300 rounded-full"
        >
          <GrGithub className="h-8 w-8 mr-4 cursor-pointer" />
          <GrLinkedin className="h-8 w-8 ml-4 cursor-pointer" />
        </motion.a>
      </Link>

      <motion.div
        variants={linkVariants}
        animate="visible"
        whileHover="hover"
        className="my-5 py-4 bg-gray-300 rounded-3xl"
      >
        <div className="flex items-center justify-center py-2 ">
          <MdLocationOn className="w-8 h-8 text-orange" />
          <h6 className="text-bblue">Copenhagen, DK</h6>
        </div>
        <p className="flex items-center justify-center py-2 text-bblue">
          <motion.svg
            variants={svgVariant}
            initial="hidden"
            animate="visible"
            className="w-8 h-8 text-orange"
            style={{ width: "24px", height: "24px" }}
          >
            <motion.path
              variants={pathVariant}
              initial="hidden"
              animate="visible"
              fill="currentColor"
              d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z"
            />
          </motion.svg>
          imabbasi@msn.com
        </p>
        <p className=" text-bblue flex items-center justify-center py-2">
          <ImMobile className="w-8 h-8 text-orange" />
          +4560888636
        </p>
      </motion.div>
      <motion.button
        animate={{
          rotateZ: 360,
        }}
        whileHover={{
          scale: 1.5,
          textShadow: "0px 0px 8px rgb(0,0,0)",
          boxShadow: "0px 0px 8px rgb(0,0,0)",
        }}
        className="bg-gradient-to-r from-blue-400 to-green-300 w-12/12 py-2 px-5 rounded-full my-3"
        onClick={() => window.open("mailto:imabbasi@msn.com")}
      >
        Email me
      </motion.button>
      <motion.button
        animate={{
          rotateZ: 360,
        }}
        whileHover={{
          scale: 1.5,
          textShadow: "0px 0px 8px rgb(0,0,0)",
          boxShadow: "0px 0px 8px rgb(0,0,0)",
        }}
        className="bg-gradient-to-r from-green-400 to-blue-500   w-12/12 py-2 px-5 rounded-full my-2 text-white font-bold"
        onClick={themeToggler}
      >
        Toggle Theme
      </motion.button>
    </div>
  );
};

export default Sidebar;
