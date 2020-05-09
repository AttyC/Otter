import React from 'react';
import styled from 'styled-components';

import Signup from './Signup';

const MainSection = styled.section`
  border: 1px solid grey;
  height: calc(100vh - 10%);
`;

const Main = () => (
  <MainSection>
  <div>
  <p>render form modal here</p>
  <Signup />
  </div>
</MainSection>
)

export default Main;

