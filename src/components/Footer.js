import React from 'react';

import styled from 'styled-components';


const FooterTag = styled.footer`
  height: 10%;
  display: flex;
  justify-content: center;
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

