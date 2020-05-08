import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const MainSection = styled.section`
  border: 1px solid grey;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Main = () => (
  <MainSection>
    <div>
      <p>render form modal here</p>
      <Button />
    </div>
</MainSection>
)

export default Main;

