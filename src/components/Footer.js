import React from 'react';
import styled from 'styled-components';

const FooterTag = styled.footer`
  color: ${props => props.theme.footerFontColour};
  display: flex;
  justify-content: center;
  height: 100px;
  background: darkslategrey;
  div {
    text-align: center;
  }
`;
const Footer = () => (
<FooterTag className="sticky-footer">
  <div>
    <h4>Made with Heart</h4>
    <p>Copyright 2020 Otter.co</p>
  </div>
</FooterTag>
)

export default Footer;

