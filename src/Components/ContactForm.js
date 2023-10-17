import React from "react";
import { styled } from "styled-components";

const ContactForm = () => {
  return (
    <Wrapper>
      <div className="box-wrapper">
        <div className="sidebox">
          <p>Don't be a stranger!</p>
          <h1 className="heading">You tell us. We listen.</h1>
          <p>
            Cras elementum finibus lacus nec lacinia. Quisque non convallis
            nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend
            magna vehicula et. Nam mattis est sed tellus.
          </p>
        </div>
        <form action="https://formspree.io/f/xknlrjzj" method="POST">
          <input
            type="text"
            placeholder="Name"
            name="name"
            autoComplete="off"
            required
          />
          <br />
          <br />
          <input type="email" placeholder="Email" name="email" autoComplete="off" required />
          <br />
          <br />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            autoComplete="off"
            required
          />
          <br />
          <br />
          <div className="textarea-box">
            <textarea placeholder="Message" name="message"></textarea>
            <br />
            <br />
            <br />
            <button>Send message</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #d3d3d3;
  .box-wrapper {
    margin: 0 auto;
    width: 85%;
    display: flex;
    justify-content: center;
    gap: 6rem;
    padding-bottom: 16rem;
  }
  .sidebox {
    width: 45%;
    line-height: 3rem;
    padding-top: 6rem;
    text-align: start;
  }
  .sidebox p {
    font-size: 1.7rem;
  }
  .sidebox h1 {
    font-size: 4.5rem;
    margin-top: 1.7rem;
    margin-bottom: 3rem;
  }
  Form {
    width: 44%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
  }
  Form input {
    width: 99%;
    padding: 1.2rem 1rem;
    font-size: 1.5rem;
    background-color: #d3d3d3;
    outline: none;
    border: none;
  }
  .textarea-box {
    width: 99%;
  }
  Form textarea {
    width: 100%;
    height: 220px;
    padding: 1.2rem 1rem;
    font-size: 1.5rem;
    background-color: #d3d3d3;
    outline: none;
    border: none;
  }
  button {
    padding: 1rem 2.5rem;
    background-color: blue;
    color: white;
    font-size: 2rem;
    outline: none;
    border: none;
  }
`;

export default ContactForm;
