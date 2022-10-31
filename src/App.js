import React from 'react';
import './style.css';
import Mint from './components/Mint/Mint';
import Form from './components/Form/Form';
import Banner from './components/Header/Banner';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  place-content: center;
`;
export default function App() {
  return (
    <Container>
      <Mint />
    </Container>
  );
}
