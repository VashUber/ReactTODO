import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from "styled-components";
import App from './App';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@600&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-size: 1.08em;
    font-family: 'Public Sans', sans-serif;
  }

  h1 {
    font-size: 1.55em;
  }

  h2 {
    margin-top: 15px;
    font-size: 1.13em;
    height: 80px;
  }
`

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle/>
		<App/>
	</React.StrictMode>,
	document.getElementById('root')
);

