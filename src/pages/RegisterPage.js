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
    padding: 20px;
    background-color: #364D87;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 425px;
    height: 850px;

    input{
      display: inline-block;
      height: 40px;
      font-size: 20px;
    }

    label {
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
    <RegisterContainer>
      <BG as={Link} to='/'></BG>
      <Register id='register-page'>
        <RegisterForm id='register-form'></RegisterForm>
      </Register>
    </RegisterContainer>

    );
}
