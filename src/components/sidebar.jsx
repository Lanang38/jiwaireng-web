import { useState } from "react";
import { Home, User, Book, Settings, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const Menus = [
    { title: "Beranda", icon: <Home />, path: "/" },
    { title: "Pengajar", icon: <User />, path: "/pengajar" },
    { title: "Pelajar", icon: <Book />, path: "/pelajar" },
    { title: "Pengaturan", icon: <Settings />, path: "/pengaturan" },
  ];

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleNavigation = (path) => {
    if (path) navigate(path); 
  };

  return (
    <div className="flex">
      <div className="w-60 bg-blue-200 text-white h-screen p-5 pt-8 relative duration-300">
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className="cursor-pointer duration-500"
          />
        </div>

        <ul className="pt-10">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex flex-col p-2 cursor-pointer text-2xl font-semibold items-start gap-x-4 
              hover:text-primary-800 transition-all duration-300 
              ${location.pathname === Menu.path ? "text-primary-800" : "text-white"}`}
              onClick={() => handleNavigation(Menu.path)} // Navigasi
            >
              <div
                onClick={() => toggleMenu(index)}
                className="flex items-center gap-x-4"
              >
                <span className="text-3xl">{Menu.icon}</span>
                <span className="origin-left duration-200 text-xl">
                  {Menu.title}
                </span>
                {Menu.subMenu && (
                  <span
                    className={`text-3xl transition-transform duration-300 ${
                      activeMenu === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown />
                  </span>
                )}
              </div>

              {activeMenu === index && Menu.subMenu && (
                <ul className="pl-6 ml-4 pt-2 space-y-2">
                  {Menu.subMenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-xl text-primary-50 hover:text-primary-600"
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;