import React from 'react'
import styled from 'styled-components'
import a from "../images/0.jpg"
import b from "../images/1.jpg"
import c from "../images/2.jpg"
import d from "../images/3.jpg"
import e from "../images/4.jpg"
import f from "../images/5.jpg"
import g from "../images/6.jpg"
import h from "../images/7.jpg"
import i from "../images/8.jpg"
import j from "../images/9.jpg"
import k from "../images/10.jpg"
import l from "../images/11.jpg"
import m from "../images/12.jpg"
import n from "../images/13.jpg"
import o from "../images/14.jpg"
import p from "../images/15.jpg"
import q from "../images/16.jpg"
import r from "../images/17.jpg"

function MidSection() {
  return (
    <DIV>
      <div className='container'>
        <div className='pics'>
          <div className='colm1'>
          <img src={a} alt="" />
            <img src={b} alt="" />
            <img src={c} alt="" />
          </div>
          <div className='colm2'>
          <img src={d} alt="" />
            <img src={e} alt="" />
            <img src={f} alt="" />
          </div>
          <div className='colm3'>
          <img src={g} alt="" />
            <img src={h} alt="" />
            <img src={i} alt="" />
          </div>
          <div className='colm4'>
          <img src={j} alt="" />
            <img src={k} alt="" />
            <img src={l} alt="" />
          </div>
          <div className='colm5'>
          <img src={m} alt="" />
            <img src={n} alt="" />
            <img src={o} alt="" />
          </div>
          <div className='colm6'>
          <img src={p} alt="" />
            <img src={q} alt="" />
            <img src={r} alt="" />
          </div>
          <div className='colm7'>
            <img src={a} alt="" />
            <img src={b} alt="" />
            <img src={c} alt="" />
          </div>
        </div>
        <div className='text'>
            <div>
                <h1><span>Create, customize, and publish</span> your digital persona to life effortlessly.</h1>
            </div>
        </div>
      </div>
    </DIV>
  )
}

export default MidSection

const DIV = styled.div`
    .container{
        /* width: 1,440px; */
        /* height: 556.72px; */
        z-index: -111;
        top: 172.42px;
        left: 0.46px;
        padding: 0px 177px 0px 177px;
        border: 1px solid green;
        margin: auto;
        background: linear-gradient(135deg, #1B2236 0%, #130D17 50%, #0D1B22 100%);
        height: 100vh;
  max-width: 1312px;
  margin: auto;
    }

    .pics{
        width: 1086px;
        height: 556.72px;
        padding: 134.36px 174.5px 134.36px 174.5px;
        border: 1px solid red;
        display: flex;
        gap: 10px;
        margin: auto;
    }

    .text{
        width:1,085px;
        height: 288px;
        padding: 80px 10.33px 80px 10.31px;
    }

    .text>div{
        width: 1,064.36px;
        height:128px;

    }

    .text>div>h1{
        font-family: Outfit;
        font-size: 48px;
        font-weight: 500;
        line-height: 64px;
        text-align: center;

    }
    .text > div > h1 {
      color: #ffff;
    }

    .text > div > h1 > span {
    font-family: Outfit;
    font-size: 48px;
    font-weight: 500;
    line-height: 64px;
    text-align: center;
    background: linear-gradient(90deg, #FACC69 0%, #FF91A5 100%);
    -webkit-background-clip: text;
    color: transparent;
  }
/* 
  .pics:nth-child(even){
    width: 126.12px;
    height: 508.92px;
    top: 23.58px;
    left: -0.46px;
    padding: 63.7px 0px 0px 0px;
    gap: 34.4px;
    opacity: 0.5px;

  }
  .pics:nth-child(odd){
    width: 126.12px;
    height: 446.5px;
    top: 23.58px;
    left: 799.55px;
    gap: 34.4px;
    opacity: 0.5px;


  } */


`