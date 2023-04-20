import React from "react";
import  ReactDOM from "react-dom/client";
// import { AfiliApp} from './AfiliApp.';
import { FirstComponent } from "./FirstComponent";


// Styles Css
import './styles.css'
import { CounterApp } from "./CounterApp";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <AfiliApp /> */}
        <FirstComponent title="Hola, soy Diego"  />
        {/* <CounterApp value={0} /> */}
        {/* <AfiliApp2 /> */}
    </React.StrictMode>
);