
import Layout from "./components/layout";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }  ) {
  const router = useRouter();
  const isPreAuth = ["/Login", "/Signup"].includes(router.pathname);
  console.log("requestedPath is ");

    return(isPreAuth ?( 
      <Component {...pageProps}/>
      ):(
        <Layout>
        <style jsx global>{`
        body {
          background-color: yellow;
          color:white;
            }
      `}</style>
        <Component {...pageProps}/>
        </Layout>
    ));
}

