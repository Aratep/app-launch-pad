import React from "react";
import ReactDOM from "react-dom";

//ROUTER DOM
import { BrowserRouter } from "react-router-dom";

//REDUX
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Provider>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
