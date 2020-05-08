import React from 'react';
import styled from 'styled-components';

import Form from './Form';

const MainSection = styled.section`
  border: 1px solid grey;
  height: calc(100vh - 10%);
`;

const Main = () => (
  <MainSection>
  <div>
  <p>render form modal here</p>
  <Form />
  </div>
</MainSection>
)

export default Main;

