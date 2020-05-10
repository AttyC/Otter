import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonTag = styled.button`

  background: ${props => {
    if (props.buttonType === 'secondary') {
      return props.theme.buttonSecondaryBackground;
    } 
    return props.theme.buttonPrimaryBackground;
  }};

  color: ${props => {
    if (props.buttonType === 'secondary') {
      return props.theme.bodyFont;
    } 
    return props.theme.buttonFontColour;
  }};
  font-family: 'Oldenburg', serif;
  font-size: 1.15em;
  font-weight: bold;
  padding: 0.7em 1em;
  border-radius: ${props => props.theme.buttonBorderRadius};

  &:hover {
    transform: scale(1.05);
  }

  &.modal-form {
    margin-top: 1em;
  }
`;

const Button = ({ buttonType, onClick, text }) => (
  <ButtonTag
    buttonType={buttonType}
    onClick={onClick}
    text={text}
  >
    {text}
  </ButtonTag>
);

Button.propTypes = {
  buttonType: PropTypes.oneOf([
    'primary',
    'secondary'
  ]),
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  buttonType: 'primary',
};

export default Button;

