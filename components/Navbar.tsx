import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

const NavItem: FC<{
  activepage: string;
  setActivePage: Function;
  name: string;
  route: string;
}> = ({ activepage, setActivePage, name, route }) => {
  return activepage !== name ? (
    <Link href={route}>
      <a>
        <span
          className="hover:font-extrabold"
          onClick={() => setActivePage(name)}
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

export const Navbar = () => {
  const [activepage, setActivePage] = useState<string>("");
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") setActivePage("About");
    if (pathname === "/projects") setActivePage("Projects");
    if (pathname === "/resume") setActivePage("Resume");
  }, [pathname]);
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 text-orange">
        {activepage}
      </span>
      <div className="text-dblue font-bold flex space-x-5">
        <NavItem
          activepage={activepage}
          setActivePage={setActivePage}
          name="About"
          route="/"
        />
        <NavItem
          activepage={activepage}
          setActivePage={setActivePage}
          name="Education"
          route="/Education"
        />
        <NavItem
          activepage={activepage}
          setActivePage={setActivePage}
          name="Work Experience"
          route="/workexp"
        />
        <NavItem
          activepage={activepage}
          setActivePage={setActivePage}
          name="Technical Skills"
          route="/TechSkills"
        />
        <NavItem
          activepage={activepage}
          setActivePage={setActivePage}
          name="Certifications"
          route="/Certs"
        />
        <NavItem
          activepage={activepage}
          setActivePage={setActivePage}
          name="Others"
          route="/Others"
        />
      </div>
    </div>
  );
};
