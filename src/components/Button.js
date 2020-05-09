import React from 'react';
import styled from 'styled-components';

const ButtonTag = styled.button`
  background: darkslategrey;
  color: ${props => props.theme.headerFontColour};
  padding: 2em;
  border-radius: ${props => props.theme.buttonBorderRadius};
`;

const onClick = () => {
  console.log('you clicked!')
}

const Button = () => (  
  <ButtonTag onClick={onClick}>
    <span>Jump in, the water's lovely!</span>
  </ButtonTag>
)

export default Button;

