import React from 'react';
import styled from 'styled-components';

const Main = () => {
  const MainContainer = styled.main`
  width: fit-content;
    text-align: center;
  `;

  return (
    <MainContainer>
      <h1>Some MainContainer content here</h1>
    </MainContainer>
  );
};

export default Main;
