import React, { useEffect, useState } from "react";
import { MyBurger } from "./MyBurger";

const MyNavbar = ({links, route}) => {
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
      <header className={`my-header ${isScrolled ? 'my-h-invisible' : 'my-h-visible'}`}>
         <nav className='my-navbar'>
            {Object.entries(links).map(([key, value]) => (
               <a key={key} className={route === value ? 'my-navlink my-active' : 'my-navlink'}
                  href={value}>{key}</a>
            ))}
         </nav>
         <MyBurger route={route} links={links} />
      </header>
   );
}

export default MyNavbar;