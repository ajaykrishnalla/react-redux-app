import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles.css";
import store from "./store";
import AuthComponent from "./AuthComponent";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AuthComponent />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
