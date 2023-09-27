import React, { useEffect, useRef } from "react";

export const MyMenuDeroulant = ({menuShow, closeClick, links, route}) => {

   const menuDeroulantRef = useRef(null);

   useEffect(() => {

      const handleClickOutside = (event) => {
         if (menuDeroulantRef.current && menuShow && !menuDeroulantRef.current.contains(event.target)) {
            closeClick(event);
         }
      };

      const listener = (event) => handleClickOutside(event);
      window.addEventListener('click', listener);

      return () => {
         window.removeEventListener('click', listener);
      };
   }, [menuShow]);

   return (
      <div className={`my-menu-deroulant ${menuShow ? '' : 'my-display-none'}`} ref={menuDeroulantRef}>
         {Object.entries(links).map(([key, value]) => (
               <a key={key} className={route === value ? 'my-menulink my-active' : 'my-menulink'}
                  href={value}>{key}</a>
            ))}
      </div>
   );
};