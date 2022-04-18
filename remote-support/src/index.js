import React from 'react';
import ReactDOM from 'react-dom';
import Rootstore from './ModelStores/RootStore';
import reportWebVitals from './reportWebVitals';
import View from './UI/View';
import { AppContextProvider } from './Utilities/contextProvider';

const RootStore = new Rootstore();

ReactDOM.render(
    <AppContextProvider value={RootStore}>
        <View/>
    </AppContextProvider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
