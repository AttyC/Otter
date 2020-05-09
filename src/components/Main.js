import React from 'react';
import styled from 'styled-components';

import PopUpModal from './PopUpModal';

import otter from '../img/happy_otter_transparent.png'

const MainSection = styled.section`
  // background:${props => props.theme.darkBackground};
  background:${props => props.theme.brightBackground};
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 70vh;
  border-bottom-left-radius: 93%;
  background:${props => props.theme.brightBackground};

  padding: 0 10%;
  h2 {
    font-size: 1.8em;
  }
  h3 {
    font-size: 2.1em;
  }
  img {
    border-radius: 5%;
    width: 200px;
  }

`;

const Main = () => (
  <MainSection>

    <Content>
   
      <h2>The way to Happiness?</h2>
      <img src={otter} alt="printed otter in sea" />
      <h3> Be more ... Otter</h3>
      <p>Be the first to know when we launch</p>
    </Content>
    <PopUpModal/>

</MainSection>
)

export default Main;

