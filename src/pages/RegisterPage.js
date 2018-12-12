import React from "react";
import RegisterForm from "../components/RegisterForm";
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const RegisterContainer = styled.div`
    position: fixed;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow:scroll;
    background-color: rgba(50, 50, 50, 0.8);
  `;

  const BG = styled.div`
    position: absolute;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `;
  const Register = styled.div`
  #register-form {
    padding: 10px;
    background-color: #364D87;
    position: relative;
    top: 150px;
    width: 450px;
    height: 750px;
    margin-left: auto;
    margin-right: auto;


    input{
      height: 40px;
      font-size: 20px;
    }

    label {
      display: block;
      margin: 0px;
      color: white;
      font-size: 24px;
    }

    [type=radio] {
      outline: none;
      margin: 0;
    }
  }
`;

  return (
    <RegisterContainer className='animated fadeIn'>
      <BG as={Link} to='/'></BG>
      <Register id='register-page'>
        <RegisterForm id='register-form'></RegisterForm>
      </Register>
    </RegisterContainer>

    );
}
