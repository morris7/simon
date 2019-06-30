import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Board from './components/Board/Board';


function App() {
  return (
    <div className="App">
      <Board/>
      <GlobalStyle/>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #f7f9ef;
  }
`

export default App;
