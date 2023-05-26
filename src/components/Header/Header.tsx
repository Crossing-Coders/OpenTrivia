import { useState } from "react";
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  //TODO: ADD MOBILE FILTERING (AND PC FILTERING, BUT HEADER MENU COMPLICATES THINGS -- CONSIDER ANOTHER METHOD?)
  //TODO: DECIDE ON WHAT THE TOP BAR NEEDS
  //TODO: CENTER THE PC TOP BAR OPTIONS VERTICALLY
  //TODO: GET A REAL LOGO
  //TODO: CHANGE IMG TO NEXTJS IMAGE?


  return (
    <div className="flex sticky top-0 text-center lg:h-[115.83px] bg-stone-50 z-50 justify-between border-b-4 shadow-sm  p-8">
      <a href="/">
        <img
          className="w-32 p-2"
          src="https://www.brightful.me/content/images/2020/08/shutterstock_686118184.jpg"
          alt="logo"
        />
      </a>
      <div className="">
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 pr-4"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block z h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div
            className={
              isNavOpen
                ? "showMenuNav w-full h-screen absolute top-0 left-0 bg-white z-10 flex flex-col justify-evenly	content-center"
                : "hidden"
            }
          >
            <div
              className="absolute top-0 right-0 px-8 py-8 "
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">FILTER</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden text-center space-x-8 pr-6 lg:flex">
          <li>
            <a href="/about">Login</a>
          </li>
          <li>
            <a href="/portfolio">Signup</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;


