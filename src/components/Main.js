import React from 'react';
import styled from 'styled-components';

import PopUpModal from './PopUpModal';

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
  <div id="main-section">
    <PopUpModal/>
  </div>
</MainSection>
)

export default Main;

