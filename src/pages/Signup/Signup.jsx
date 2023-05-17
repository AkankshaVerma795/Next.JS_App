import { Label } from "@mui/icons-material";
import { Input, Typography } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
const Signup = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataInput, setDataInput] = useState("");
  const router = useRouter();

  const showHeader = router.pathname === "/Signup" ? false : true;

  const submitThis = (e) => {
    e.preventDefault()
    const info = {
      fName: fName,
      lName: lName,
      email: email,
      password: password,
    };
    window.localStorage.setItem('user-info', JSON.stringify(info));
    setDataInput([info]);
    router.push('/Login')
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
            Signup
          </Typography>
          <form action="" onSubmit={submitThis}>
            <div style={{ marginTop: "30px" }}>
              <label htmlFor="fName">First Name</label>
              <br />
              <input
                type="text"
                name="fName"
                id="email"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <label htmlFor="lName">Last Name</label>
              <br />
              <input
                type="text"
                name="lName"
                id="email"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                name="address"
                id="pwd"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <br />
            <br />
            <button
              disabled={!fName || !lName || !password || !email}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
