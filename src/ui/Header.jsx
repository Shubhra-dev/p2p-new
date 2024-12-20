import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const user = useSelector((state) => state.auth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // Define main menu items and sub-menu items
  const menuItems = [
    {
      name: "Home",
      path: "/",
      subItems: [],
    },
    {
      name: "Check Your Rate",
      path: "/check-rate",
      subItems: [],
    },
    {
      name: "Investment",
      path: "/investment",
      subItems: [
        { name: "Islamic", path: "/investment/islamic" },
        { name: "Assure", path: "/investment/assure" },
        { name: "Plus", path: "/investment/plus" },
        { name: "Referral", path: "/investment/referral" },
      ],
    },
    {
      name: "Calculator",
      path: "/calculator/personal",
      subItems: [
        { name: "Debt Cons Calculator", path: "/calculator/debt" },
        { name: "Home Equity Calculator", path: "/calculator/home-equity" },
      ],
    },
    {
      name: "Get Fund",
      path: "/get-fund/collateral",
      subItems: [
        { name: "Conventional", path: "/get-fund/conventional" },
        { name: "Collateral", path: "/get-fund/collateral" },
        { name: "Islamic", path: "/get-fund/islamic" },
        { name: "Referral", path: "/get-fund/referral" },
      ],
    },
    {
      name: "Personal Loan (PL)",
      path: "/pl/overview",
      subItems: [
        { name: "Debt", path: "/pl/debt" },
        { name: "Home Improvement", path: "/pl/home-improvement" },
        { name: "Special Occasion", path: "/pl/special-occasion" },
      ],
    },
    {
      name: "Medical Loan",
      path: "/pl/medical-loan",
      subItems: [
        { name: "Dental", path: "/pl/dental" },
        { name: "Bariatric Surgery", path: "/pl/bariatric-surgery" },
        { name: "Fertility Treatment", path: "/pl/fertility-treatment" },
        { name: "Plastic Surgery", path: "/pl/plastic-surgery" },
        { name: "Mental Health", path: "/pl/mental-health" },
      ],
    },
    // {
    //   name: user.isLoggedIn ? user.userName : "Log In",
    //   path: "/auth/login",
    //   subItems: [],
    // },
  ];

  const handleSubMenuToggle = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  return (
    <header className="bg-white text-black shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => nav("/")}
          >
            <h1 className="text-xl font-bold text-primary">P2P New</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((menu, index) => (
              <div key={index} className="relative group z-50">
                <button
                  className="hover:bg-gray-200 px-3 py-2 text-sm font-medium"
                  onClick={() => nav(menu.path)}
                >
                  {menu.name}
                </button>
                {/* Sub-menu for desktop */}
                {menu.subItems.length > 0 && (
                  <div className="absolute hidden group-hover:block bg-white text-black mt-1 w-48 shadow-lg">
                    {menu.subItems.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        className="block px-4 py-2 text-sm hover:bg-gray-200 w-full text-left"
                        onClick={() => nav(subItem.path)}
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {user.isLoggedIn && (
              <button
                className="hover:bg-gray-200 px-3 py-2 text-sm font-medium"
                onClick={() => nav("/user/dashboard")}
              >
                {user.userName}
              </button>
            )}
            {!user.isLoggedIn && (
              <button
                className="hover:bg-gray-200 px-3 py-2 text-sm font-medium"
                onClick={() => nav("/auth/login")}
              >
                Log In
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            {menuItems.map((menu, index) => (
              <div key={index} className="space-y-1">
                {/* Toggle only sub-menu open/close on mobile */}
                <button
                  className="w-full text-left px-4 py-2 bg-gray-100 rounded-md text-sm font-medium"
                  onClick={() => {
                    handleSubMenuToggle(index);
                  }}
                >
                  {menu.name}
                </button>

                {/* Conditionally render sub-menus on mobile */}
                {activeSubMenu === index && menu.subItems.length > 0 && (
                  <div className="pl-4 space-y-1">
                    {menu.subItems.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 rounded-md"
                        onClick={() => {
                          nav(subItem.path);
                          setIsMobileMenuOpen(false); // Close mobile menu
                          setActiveSubMenu(null); // Close sub-menu
                        }}
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
