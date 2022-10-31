import React from 'react';
import styled from 'styled-components';
import { btnObjs } from './MintStyle';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const MintWrapper = () => {
  const MintWrapper = styled.div`
  display: flex;
  place-content: center;
  padding: 10px;
  border-radius: 1rem;
  width: fit-content;
  margin: 100px;
  background-color: #C2E0FF;
  flex-direction: column;
`;
  const MintRow = styled.div`
display: flex;
flex-direction: row;
gap: 15px;
padding: 5px;
width: max-content;
background-color: #69B3FF;
padding: 10px;

`;
  const MintCol = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
text-align: center;
border-radius: 1 rem;

`;
  const FooterMint = styled.div`
  display: flex;
  flex-direction: row;
  place-content: space-around;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 5px;
  height: 10px;
  background-color: #C2E0FF;

`;
  const HeaderMint = styled.div`
  display: flex;
  flex-direction: row;
  place-content: space-around;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 5px;
  height: 10px;
  background-color: #C2E0FF;


`;

  const ContentCandy = styled.div`
  padding: 10px;
  background-color: #3F9CFC;
  border-radius: 1rem 1rem 0rem 0rem;

`;
  const MainContainer = styled.main`
background-color: #3F9CFC;

  height: fit-content;
  text-align: center;

`;


  return (
    <MintWrapper>
      <ContentCandy>
        <HeaderMint />
        <MintRow>
          <MintCol>
            {btnObjs.map((btn) => {
              return [btn.facebook];
            })}
          </MintCol>
          <MintCol>
            {btnObjs.map((btn) => {
              return [btn.twitter];
            })}
          </MintCol>
          <MintCol>
            {btnObjs.map((btn) => {
              return [btn.github];
            })}
          </MintCol>
          <MintCol>
            {btnObjs.map((btn) => {
              return [btn.facebookMess];
            })}
          </MintCol>
          <MintCol>
            {btnObjs.map((btn) => {
              return [btn.linked];
            })}
          </MintCol>
          <MintCol>
            {btnObjs.map((btn) => {
              return [btn.instagram];
            })}
          </MintCol>
        </MintRow>
        <FooterMint />
      </ContentCandy>
      <MainContainer>
        <Main />
      </MainContainer>
      <Footer/>
    </MintWrapper>
  );
};

export default MintWrapper;
