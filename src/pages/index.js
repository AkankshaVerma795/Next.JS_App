import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
  
  const  isPreAuth = ['/login', '/Signup'].includes(router.pathname)
  //const { data: session, status } = useSession()
 // if (status === "authenticated") {

  let requestedPath=router.pathname;
  
  console.log("requestedPath is " + requestedPath);

  useEffect(() => {

    const isAuthenticated = true; 
    if (!isAuthenticated) {
      if(requestedPath!=="/"){
        router.push(requestedPath);
      }
      console.log("In login page")
      router.push("/login");
    }
  }, []);
  return isPreAuth  ?   <Component {...pageProps}/> :  (
    <div style={{height:"100%", align: "center",color:"black"}}>Welcome to the home page!</div>
  );
}
