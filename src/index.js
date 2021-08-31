import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from "styled-components";
import App from './App';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 1.08em;
    font-family: 'Overpass', sans-serif;
  }

  h1 {
    font-size: 1.55em;
  }

  h2 {
    margin-top: 15px;
    font-size: 1.13em;
    height: 80px;
  }

  ::placeholder {
    color: rgba(255, 255, 255, 0.54);
  }
`

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle/>
		<App/>
	</React.StrictMode>,
	document.getElementById('root')
);

