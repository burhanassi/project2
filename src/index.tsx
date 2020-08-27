import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from "@material-ui/styles";
import {theme} from "./Theme/Theme";
import DataContextProvider from './context/data-context';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <DataContextProvider>
                <App />
            </DataContextProvider>
        </ThemeProvider>
    </React.StrictMode>,
  document.getElementById('root')
);