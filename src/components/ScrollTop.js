// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// export const ScrollTop = () => {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

export const ScrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};
