import React, { useRef, useState } from "react";
import { MyMenuDeroulant } from "./MyMenuDeroulant";

export const MyBurger = ({links, route}) => {

   let [menuShow, setMenuShow] = useState(false);
   let [burgerOpen, setBurgerOpen] = useState(true);
   let [burgerClose, setBurgerClose] = useState(false);
   let [showSearch, setShowSearch] = useState(false);

   const svgOpenRef = useRef(null);
   const svgCloseRef = useRef(null);
   const searchBar = useRef(null);
   const searchContainer = useRef(null)

   const openClick = (event) => {
      event.stopPropagation();
      const linkss = document.querySelectorAll('.my-menulink');

      linkss.forEach((link, index) => {
         setTimeout(() => {
            link.style.opacity = 1;
         }, index * 200)
      })
      svgOpenRef.current.animate([
            { transform: 'rotate(180deg)' },
            { transform: 'rotate(0deg)' }
      ],
      {
         duration: 500,
         fill: 'forwards'
      });

      setMenuShow(true);
      setTimeout(() => {
         setBurgerOpen(false);
         setBurgerClose(true);
      },500);
   }

   const closeClick = (event) => {
      event.stopPropagation();
      const linkss = document.querySelectorAll('.my-menulink');

      linkss.forEach((link) => {
         link.style.opacity = 0;
      })
      svgCloseRef.current.animate([
            { transform: 'rotate(180deg)' },
            { transform: 'rotate(0deg)' }
         ],
         {
            duration: 500,
            fill: 'forwards'
         });

      setMenuShow(false)

      setTimeout(() => {
         setBurgerOpen(true);
         setBurgerClose(false);
      },500)
   }

   const searchOpen = () => {
      setShowSearch(true);
   }
   const searchClose = (event) => {
      if (event.target !== searchBar.current) {
         setShowSearch(false);
      }
   }

   return (
      <>
         <div onClick={searchClose} ref={searchContainer} className={`my-search ${showSearch ? '' : 'my-display-none'}`}>
            <div className="my-search-bar">
               <input ref={searchBar} type="text" placeholder='rechercher' />
            </div>
         </div>

      <div className="my-burger">
         <div className='my-search-svg' onClick={searchOpen}>
            <svg><use href="/icons/sprite.svg#search"></use></svg>
         </div>

         <div className={`my-burger-open ${burgerOpen ? '' : 'my-display-none'}`} onClick={openClick}>
            <svg ref={svgOpenRef}><use href="/icons/sprite.svg#my-burger-open"></use></svg>
         </div>

         <div className={`my-burger-close ${burgerClose ? '' : 'my-display-none'}`} onClick={closeClick}>
            <svg ref={svgCloseRef}><use href="/icons/sprite.svg#my-burger-close"></use></svg>
         </div>

         <MyMenuDeroulant route={route} links={links} menuShow={menuShow} closeClick={closeClick} />
      </div>
      </>
   )
}