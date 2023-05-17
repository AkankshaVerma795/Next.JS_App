import { Label } from "@mui/icons-material";
import { Input, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [logcheck, setlogcheck] = useState(false);

 
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");
  const Router = useRouter();
 const pathname = Router.pathname;

  const submitThis = (e) => {
    e.preventDefault();
    const info = { email: email, password: passw };
    const user = window.localStorage.getItem("user-info")
      ? JSON.parse(window.localStorage.getItem("user-info"))
      : {};
    if (Object.keys(user).length <= 0) {
      window.alert("Please Signup to login");
      return;
    }
    console.log("user", user);
    if (info.email !== user.email || info.password !== user.password) {
      window.alert("Invalid Credentials");
      return;
    }
    localStorage.setItem("token",user.email+user.password);
  
    
    setDataInput([info]);
  
    
        if (user  ) {
          if(pathname!=='/Login'){
      
           
            Router.push(pathname);
          }
        else{
          Router.push('/Home');
        }
     // console.log(pathname, user);
    }
   
  
  };

  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flex: 1,
        marginTop: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "380px",
          height: "500px",
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "rgba(250,0,0,0.3)",
          borderRadius: "10px",
        }}
      >
        <div>
          <Typography
            textAlign="center"
            marginRight="20px"
            color="#ffffff"
            marginTop="30px"
            marginBottom="30px"
            fontSize={30}
          >
            {" "}
            Login
          </Typography>
          <form onSubmit={submitThis}>
            <div style={{ marginTop: "70px" }}>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label htmlFor="passw">Password</label>
              <br />
              <input
                type="password"
                name="passw"
                id="passw"
                value={passw}
                onChange={(e) => setPassw(e.target.value)}
              />
            </div>
            <p style={{ fontSize: "12px" }}>Don't have an account?</p>{" "}
            <Link href="/Signup">
              <i style={{ color: "#fff" }}>Sign-up</i>
            </Link>
            <br />
            <br />
            <button disabled={!email || !passw} type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;