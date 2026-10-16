import { useEffect, useRef, useState } from "react";
import bgLandingPage from '../assets/img/bg-landingPage.webp'

export default function LazyBackground({children }) {
   const ref = useRef(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
               observer.unobserve(entry.target);
            }
         });
      });
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
   }, []);

   return (
      <div
         ref={ref}
         className="relative flex flex-col lg:items-start lg:justify-start min-h-[60vh] bg-cover bg-center text-white p-4 lg:text-left overflow-hidden"
         style={{
            backgroundImage: isVisible ? `url(${bgLandingPage})` : "none",
            opacity: isVisible ? 1 : 0,
         }}
      >
         {children}
      </div>
   );
}
