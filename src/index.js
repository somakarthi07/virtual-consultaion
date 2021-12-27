import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {UserContextProvider} from "./Contexts/User"
import {CallContextProvider} from "./Contexts/CallContext"

ReactDOM.render(

    <UserContextProvider>
      <CallContextProvider>
        <App />
      </CallContextProvider>
    </UserContextProvider>
, document.getElementById('root')
);

