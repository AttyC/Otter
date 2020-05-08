import React from 'react';
import './App.css';


import styled, { ThemeProvider } from 'styled-components';
import theme from './style/theme';

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const Wrapper = styled.div`
  height: calc(100vh);
  margin: auto 15%;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  </ThemeProvider>
);

export default App;
