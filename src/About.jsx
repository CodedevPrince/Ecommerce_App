import React, { useContext } from "react";
import { AppContext, useAppContext } from "./context/productcontex";
// import { useAppContext } from "./context/productcontex";

const About = () => {
  const Username = useAppContext();
  return (
    <>
      {Username}
      <h1>About</h1>
    </>
  );
};
export default About;
