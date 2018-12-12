import React from "react";
import RegisterForm from "../components/RegisterForm";
import styled from 'styled-components';
import { Link } from "react-router-dom";


const RegisterContainer = styled.div`
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(50, 50, 50, 0.8);

  overflow: scroll;

  animation-duration: .5s;
`;

const BG = styled.div`
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

`;

export default function RegisterPage() {
  return (
    <RegisterContainer className='animated fadeIn'>
      <BG as={Link} to='/'></BG>
      <RegisterForm id='register-form'></RegisterForm>
    </RegisterContainer>
  );
}
