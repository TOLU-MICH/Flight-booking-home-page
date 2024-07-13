import { useEffect, useRef, useState } from "react";
import { GridOutline } from "react-ionicons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpenNav(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const navLinks = [
    { title: "Home", path: "/", active: true },
    { title: "How To", path: "/howTo", active: false },
    { title: "Services", path: "/services", active: false },
    { title: "Blog", path: "/blog", active: false },
    { title: "Contact", path: "/contact", active: false },
    { title: "Newspaper", path: "/newspaper", active: false },
    { title: "About", path: "/about", active: false },
  ];
  return (
    <div className="z-[2] w-full my-auto mx-0 h-16 md:px-12 px-8 py-3 sm:py-10  absolute top-[20px]">
      <div className="flex justify-between">
        <span className="text-white text-[28px] font-semibold">Logo.</span>
        <ul
          className={
            "transition-all duration-300 ease-in-out pt-20 lg:pt-0 flex flex-col bg-[#141b2b] fixed top-0 h-screen lg:h-auto lg:relative lg:flex-row gap-9 lg:gap-4 text-white items-start w-[70%] lg:w-auto lg:items-center lg:!translate-x-0 " +
            (openNav == false ? "-translate-x-[200%]" : "translate-x-0")
          }
        >
          {navLinks.map((item, index) => (
            <li
              className="w-full text-nowrap lg:after:hidden after:absolute relative after:h-[1px] after:w-full after:bg-[radial-gradient(ellipse_at_left,rgba(197,202,213,.15)_0%,rgba(255,255,255,0)_70%)] after:-bottom-4 after:-left-3"
              key={index}
            >
              {item.title}
            </li>
          ))}
          <button className="bg-blue-400 rounded-full text-gray-900 px-6 py-3 font-semibold hover:bg-gray-700 hover:text-white text-nowrap text-sm">
            Book Now
          </button>
        </ul>

        <div className="cursor-pointer md:hidden block">
          <GridOutline color="#fff" onClick={() => setOpenNav(!openNav)} />
        </div>
      </div>

      {/* <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between">
        <span className="text-white text-[28px] font-semibold">Logo.</span>
        <div
          className={
            "lg:!flex lg:items-center lg:gap-7 lg:flex-row lg:relative top-auto left-auto" +
            (openNav == false
              ? "w-0 overflow-x-hidden "
              : "flex flex-col bg-[#141b2b] fixed left-0 w-[70%] pt-8 top-0 h-screen transition-all duration-300 translate-x-0")
          }
        >
          {navLinks.map((navLink) => {
            return (
              <Link to={navLink.path} key={navLink.title}>
                <span
                  className={`font-medium ${
                    navLink.active ? "text-blue-400" : "text-white"
                  }`}
                >
                  {navLink.title}
                </span>
              </Link>
            );
          })}
          <button className="bg-blue-400 rounded-full text-gray-900 px-6 py-3 font-semibold hover:bg-gray-700 hover:text-white">
            Book Now
          </button>
        </div>
        <div className="cursor-pointer md:hidden block">
          <GridOutline color="#fff" onClick={() => setOpenNav(!openNav)} />
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
