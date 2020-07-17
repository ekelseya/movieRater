import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Router() {
    return (
        <React.StrictMode>
            <CookiesProvider>
                <BrowserRouter>
                    <Route path="/" component={App} />
                </BrowserRouter>
            </CookiesProvider>
        </React.StrictMode>
    )
}

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
