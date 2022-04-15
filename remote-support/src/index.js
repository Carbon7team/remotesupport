import React from 'react';
import ReactDOM from 'react-dom/client';
import Rootstore from './ModelStores/RootStore';
import reportWebVitals from './reportWebVitals';
import { AppContextProvider } from './Utilities/contextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

const RootStore = new Rootstore();

root.render(
    <AppContextProvider value={RootStore}>
    <View />
    </AppContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
