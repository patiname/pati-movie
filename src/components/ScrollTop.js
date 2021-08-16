// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

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
