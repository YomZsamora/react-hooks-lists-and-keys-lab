import React from "react";

function NavBar() {
   const links = ["home", "about", "projects"];

   const portfolioLinks = links.map( (link, index) => {
      return <a key={index} href={'#' + link}>{link}</a>
   })
   
   return <nav>
      {/* display an <a> tag for each link here */}
      {portfolioLinks}
      </nav>;
}

export default NavBar;
