import React from "react";
import ReactDOM from "react-dom/client";
import { MainApp } from "./MainApp";
import "./index.css";
import 'react-markdown-editor-lite/lib/index.css';

import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainApp />
    </Provider>
  </React.StrictMode>
);
