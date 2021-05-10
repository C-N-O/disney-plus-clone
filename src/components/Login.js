import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
      <Content>
        <Logo1 src='/images/cta-logo-one.svg' />
        <SignUpButton>Get All There</SignUpButton>
        <Description>
          Explore the greatest stories from Disney, Pixar, Marvel, Star Wars and
          National Geographic, as well as exclusive Disney+ Originals.
        </Description>
        <Logo1 src='/images/cta-logo-two.png' />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    background-size: cover;
    background-repeat: no-repeat;
    background: url('/images/login-background.jpg');
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Content = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const Logo1 = styled.img``;

const SignUpButton = styled.a`
  width: 100%;
  color: #f9f9f9;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin: 8px 0 12px 0;

  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  text-align: center;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;

const Logo2 = styled.img``;
