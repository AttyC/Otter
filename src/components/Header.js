import React from 'react';
import styled from 'styled-components';

const HeaderTag = styled.header`
  background:${props => props.theme.brightBackground};
  color: ${props => props.theme.headerFontColour};
  display: flex;
  align-content: center;
  justify-content: center;
  position: fixed;  // for IE
  position: sticky;
  top: 0;

  h1 {
    font-size: 3em;
    margin: 0.5em;
  }
`;

const Header = ({ props }) => {

  console.log(props);
  return (
    <HeaderTag>
      <h1>Otter</h1>
    </HeaderTag>
  )
}

export default Header;

