import React from 'react'
import { styled } from 'styled-components';

const Promotional = () => {
  return (
    <Wrapper>
        <div className='promotional-box'>
        <div className='promotional-text'>
        <h2>Limited Time Offer</h2>
        <h1>Special Edition</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <h2>Buy This T-shirt At 20% Discount, Use Code OFF20</h2>
        <button className='shopnow'>Shop Now</button>
        </div>
      
        </div>
    </Wrapper>
  )
}
const Wrapper= styled.section`
background-color:#D3D3D3;
.promotional-box {
    background: url("./images/lowerBanner img.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    background-attachment: fixed;
    height: 60vh;
    width: 90%;
    margin: 0 auto;
    color: white;
    padding: 0 7rem;
    padding-top: 11rem;
    padding-bottom: 0;
}
.promotional-text{
    width:43%;
}
h2{
    font-size:2rem;
    margin-bottom:2rem;
}
h1{
    font-size:3.9rem;
    margin-bottom:2rem;
}
p{
    font-size:1.5rem;
    margin-bottom:2rem;
}
button{
    font-size:2rem;
    padding:1.6rem 3rem;
    margin-right:1.8rem;
}
.shopnow{
    color:black;
    background-color:white;
    border:none;
}
.shopnow:hover{
background-color:black;
color:white;
transition:all 0.2s ease-in-out;
}
`

export default Promotional;