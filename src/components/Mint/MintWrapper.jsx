import React from 'react';
import './mint.css';
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
  background-color: #C2E0FF;
  flex-direction: column;

`;
  const MintRow = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 15px;
align-content: stretch;
background-color: #69B3FF;
padding: 5px;

`;
  const MintCol = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
align-content: stretch;
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
  border-radius: 1rem;


`;
  const HeadBetweenFoot = styled.div`
display: flex;
flex-direction: row;
place-content: space-around;
padding: 5px;
height: 10px;
background-color: #C2E0FF;

`;
  return (
    <MintWrapper className="mintWrapper">
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
        <MintRow>
          <MintCol>
            <Main />
          </MintCol>
        </MintRow>
        <MintRow>
          <MintCol>
            <Footer />
          </MintCol>
        </MintRow>
        <FooterMint />
      </ContentCandy>
    </MintWrapper>
  );
};

export default MintWrapper;
