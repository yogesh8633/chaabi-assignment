import React from "react";
import logo from "../assets/heroSection/logo-c.png";

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="flex justify-between items-center p-6">
      <img src={logo} alt="Chaabi Logo" className="w-100" />
      <nav className="space-x-8 text-black">
        <a href="#features" onClick={() => scrollToSection("features")} className="hover:text-blue-900">Features</a>
        <a href="#testimonials" onClick={() => scrollToSection("testimonials")} className="hover:text-blue-900">Testimonials</a>
        <a href="/" className="text-blue-700 hover:text-blue-900">Start Free Trial</a>
      </nav>
    </header>
  );
};

export default Header;
