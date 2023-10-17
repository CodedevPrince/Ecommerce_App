import React from 'react'
import { styled } from 'styled-components';
import { TbTruckDelivery } from "react-icons/tb";
import { GiAmpleDress } from "react-icons/gi";
import { MdDiscount } from "react-icons/md";
import { FaWallet } from "react-icons/fa";

const Facilities = () => {
  return (
    <Wrapper>
        <div className='box-wrapper'>
            <div className='facilities-box'>
                <TbTruckDelivery className='icon'/>
                <h1>Worldwide Shipping</h1>
                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className='facilities-box'>
                <GiAmpleDress className='icon'/>
                <h1>Best Quality</h1>
                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className='facilities-box'>
                <MdDiscount className='icon'/>
                <h1>Best Offers</h1>
                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className='facilities-box'>
                <FaWallet className='icon'/>
                <h1>Secure Payments</h1>
                <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper= styled.section`
background-color:#D3D3D3;
.box-wrapper{
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 10rem 67px;
    padding-bottom:10rem;
}
.facilities-box{
    text-align:center;   
}
.icon{
    height:4rem;
    width:5rem;
}
.facilities-box h1{
    font-size:2.2rem;
    margin:1.3rem 0;
}
.facilities-box p{
    font-size:1.5rem;
}
`

export default Facilities;