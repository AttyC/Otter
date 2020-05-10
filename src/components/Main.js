import React from 'react';
import styled from 'styled-components';

import PopUpModal from './PopUpModal';

import otter from '../img/happy_otter_transparent.png'

const MainSection = styled.section`
  background:${props => props.theme.brightBackground};
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 65vh;
  border-bottom-left-radius: 93%;
  background: ${props => props.theme.brightBackground};

  padding: 0 10%;
  h2 {
    font-size: 1.8em;
    margin: 0.4em auto;
  }
  h3 {
    font-size: 2.1em;
    margin: 0.4em auto;
    span {
      color: ${props => props.theme.headerFontColour};
    }
  }
  img {
    border-radius: 5%;
    width: 200px;
  }

`;

const Main = () => (
  <MainSection>

    <Content>
      <img src={otter} alt="printed otter in sea" />
      <h2>The new way to Happiness? </h2>
        <h3>Be more... <span>Otter</span></h3>
      <p>Be the first to know when we launch</p>
    </Content>
    <PopUpModal/>

</MainSection>
)

export default Main;

