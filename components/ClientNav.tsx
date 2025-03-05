"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["About", "Research", "Teaching", "Awards & Honors", "CV"];

export default function ClientNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (item: string) => {
    if (item.toLowerCase() === "cv") {
      // Open the external CV link
      window.open(
        "https://www.dropbox.com/scl/fi/k5xmjvjux38exawsn2ovh/BhavnaPhogaat_CV.pdf?rlkey=fvuk2gixcswq1emplpa9bd72j&e=1&st=pgctxl08&dl=0",
        "_blank"
      );
    } else {
      // Smooth scroll to the section with id matching the item (in lowercase)
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-left py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
