// import Login from "./Login";


// export default function DynamicRoute({ slug }) {
//     switch (slug) {
//       case "login":
//         return <Login />;
//       default:
//         return <div>404 Not Found</div>;
//     }
//   }
  
//   export async function getStaticPaths() {
//     return {
//       paths: [{ params: { slug: "login" } }],
//       fallback: false,
//     };
//   }
  
//   export async function getStaticProps({ params }) {
//     return {
//       props: {
//         slug: params.slug,
//       },
//     };
//   }
const Navbar = ({children}) => {

    return (
      <div>
        user logged in
      </div>
    )
  }
  
  export default Navbar
  