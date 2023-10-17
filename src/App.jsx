import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Everything from "./Everything";
import SingleProduct from "./SingleProduct";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Error from "./Error";
import Cart from "./Cart";

function App() {
  const theme = {
    colors: {
      bg: "blue",
      textcol: "white"
    }
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/everything" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleProduct/:id" element={<SingleProduct />} />
            {/* <Route path="/product" element={<Product />} /> */}
            <Route path="*" element={<Error />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}
export default App;
