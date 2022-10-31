import React from 'react';
import styled from 'styled-components'

const FooterContainer = styled.div`
display: flex;
flex-directon: row;
background-color: #3F9CFC;
border-radius: 0rem 0rem 1rem 1rem;
height: fit-content;
text-align: center;
place-content: space-around;
place-items: center;

`

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <h1>&#9835;</h1>
      </div>
      <div>
        <h2>&copy; copyright stuff here</h2>
      </div>
    </FooterContainer>
  );
};

export default Footer;
