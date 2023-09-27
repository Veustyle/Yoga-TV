import React, { useEffect, useState } from "react";

const MyFooter = () => {
   let [baseScrollTop, setBaseScrollTop] = useState(0);
   let [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollTop = window.scrollY;

         if (currentScrollTop < baseScrollTop) {
            setIsScrolled(false);
         } else {
            setIsScrolled(true);
         }

         setBaseScrollTop(currentScrollTop);
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
   }, [baseScrollTop]);


   return (
      <footer className={`my-footer ${isScrolled ? 'my-f-visible' : 'my-f-invisible'}`}>
         <p>Footer</p>
      </footer>
   );
}

export default MyFooter;