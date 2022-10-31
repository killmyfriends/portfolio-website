import React from 'react';
import styled from 'styled-components';
import './mint';

const MintButton = styled.button`
background-color: lightgrey;
margin: 5px;
font-family: Comfortaa;
height: 70px;
width: 120px;
display: inline;
border-radius: 1rem;
padding: 15px;
outline: none;
border: none;
text-align: center;
box-shadow: inset 2px -2px 1px, -4px 2px 1px, -1px -1px 1px,
  inset -1px -1px 1px;
`;

const MintBtns = ({ icon, name, id, style }) => {
  return (
    <div>
      <MintButton className="mintBtn" style={style} id={id}>
        {name}
        {icon}
      </MintButton>
    </div>
  );
};

export default MintBtns;
