import React from 'react'
import { styled } from "styled-components";
const Choice = () => {
  return (
    <Wrapper>
    <div className='box-wrapper'>
        <div className='choice choice-1'>
        <h1>20% Off On Tank Tops</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
        <button className='shopnow'>Shop Now</button>
        </div>
        <div className='choice choice-2'>
        <h1>Latest Eyewear For You</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.​</p>
        <button className='shopnow'>Shop Now</button>
        </div>
        <div className='choice choice-3'>
        <h1>Let's Lorem Suit Up!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.​</p>
        <button className='shopnow'>Check out</button>
        </div>
        </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.box-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
    width: 80%;
    margin: 0 auto;
    margin-top: 13rem;
    gap:2rem;
    color:white;
}
.choice-1{
    background:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(./images/Women.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: contain;
    background-position: center;
    width: 32%;
    height: 63vh;
    padding:0 3rem;
    padding-bottom:0;
    padding-top:26rem;
}
.choice-2{
    background:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("./images/Mens.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: contain;
    background-position:center;
    width: 32%;
    height: 63vh;
    padding:0 3rem;
    padding-bottom:0;
    padding-top:26rem;
}
.choice-3{
    background:linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("./images/shoes.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: contain;
    background-position:center;
    width: 32%;
    height: 63vh;
    padding:0 3rem;
    padding-bottom:0;
    padding-top:26rem;
}
button{
    font-size:2rem;
    padding:1.6rem 3rem;
    margin-right:1.8rem;
    cursor:pointer;
}
.shopnow{
    color:black;
    background-color:white;
    border:none;
    cursor:pointer;
}
.shopnow:hover{
background-color:black;
color:white;
transition:all 0.2s ease-in-out;
}
h1{
    font-size:3rem;
    margin-bottom:1.5rem;
}
p{
    font-size:1.7rem;
    margin-bottom:2.5rem;
}
`

export default Choice;