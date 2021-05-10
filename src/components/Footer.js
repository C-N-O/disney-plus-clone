import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <img src='/images/logo.svg'></img>
      <Links>
        <span>Privacy Policy</span>
        <span>Subscriber Agreement</span>
        <span>Help</span>
        <span>Supported Devices</span>
        <span>About Us</span>
        <span>Interest-based Ads</span>
      </Links>
      <CopyRight>
        <span>© Disney. All Rights Reserved</span>
      </CopyRight>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #090b13;
  display: flex;
  flex-direction: column;

  img {
    width: 70px;
    height: 80px;
    cursor: pointer;
  }
`;

const Links = styled.div`
  display: flex;

  span {
    margin: 0 10px;
    font-size: 11px;
    cursor: pointer;
  }
`;

const CopyRight = styled.div`
  margin-top: 10px;
  font-size: 11px;
`;
