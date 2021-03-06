import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Board from './components/Board/Index';
import {Provider} from 'react-redux';
import Store from './store';

const StoreInstance = Store();

function App() {
  return (
    <Provider store={StoreInstance}>
      <div className="App">
        <Board />
        <GlobalStyle/>
      </div>
    </Provider>
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
