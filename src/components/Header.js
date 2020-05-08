import React from 'react';
import styled from 'styled-components';

const HeaderTag = styled.header`
  background: darkslategrey;
  color: ${props => props.theme.headerFontColour};
  display: flex;
  align-content: center;
  justify-content: center;
  height: 5em;
  position: sticky;
  top: 0;
`;

const Header = ({props}) => {

  console.log(props);
  return  (  
  <HeaderTag>
    <h1>Otter</h1>
  </HeaderTag>
)}

export default Header;

