import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Alternar dropdown
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Cerrar si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Manejar navegación con teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isOpen) {
        const items = dropdownRef.current.querySelectorAll("a");
        const activeIndex = [...items].indexOf(document.activeElement);

        if (event.key === "ArrowDown") {
          event.preventDefault();
          const nextIndex = (activeIndex + 1) % items.length;
          items[nextIndex].focus();
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          const prevIndex = (activeIndex - 1 + items.length) % items.length;
          items[prevIndex].focus();
        } else if (event.key === "Escape") {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="py-2 px-3 md:p-0 relative inline-block" ref={dropdownRef}>
      <button
        className="text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#01569D] transition"
        onClick={toggleDropdown}
      >
         <div className="flex align-middle">

         Calculadoras 
         <span className="h-5 w-5 inline-block">
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
               <path d="M7 10l5 5 5-5z"/>
            </svg>
         </span>
         </div>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded overflow-hidden"
        >
          <span className="block px-4 py-2 hover:bg-[#01569D] hover:text-white">
            <Link to={'/preseleccion'}>
               Pre-Selección
            </Link> 
          </span>
          <span className="block px-4 py-2 hover:bg-[#01569D] hover:text-white">
            <Link to={'/seleccion'}>Selección</Link>
          </span>
        </motion.div>
      )}
    </div>
  );
}
