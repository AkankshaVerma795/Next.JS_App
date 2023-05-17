// // import { createContext } from "react";
// // import GetFireBaseAdmin from "../lib/firebase";
// // export const AuthContext = createContext(null);

// // function Context({ children }) {
// //     const {auth, db} = GetFireBaseAdmin();
// //   return (
// //     <AuthContext.Provider value={{ auth, db }}>
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // }

// // export default Context;
// import Authenticated from "./Authenticated";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import Cookies from "js-cookie";

// function Authenticated(Component) {
//   return function AuthenticatedComponent(props) {
//     const router = useRouter();

//     useEffect(() => {
//       const token = Cookies.get("token"); 

     
//       if (!token) {
//         router.push("/login");
//       }
//     }, []);

   
//     return <Component {...props} />;
//   };
// }

// export default Authenticated;





