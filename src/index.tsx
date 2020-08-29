import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from "@material-ui/styles";
import {theme} from "./Theme/Theme";
import DataContextProvider from './context/data-context';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <DataContextProvider>
                    <App />
                </DataContextProvider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
  document.getElementById('root')
);