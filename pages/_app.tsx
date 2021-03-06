import { Navbar } from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { Router, useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 my-14 lg:px-48 sm:px-16 md:px-32">
        <div className="lg:col-span-3 bg-white  rounded-2xl col-span-12 p-4 text-center">
          <Sidebar />
        </div>
        <div className="lg:col-span-9 bg-white rounded-2xl flex flex-col col-span-12 overflow-hidden">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.pathname} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
