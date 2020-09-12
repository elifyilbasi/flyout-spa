import React from "react";
import { Provider } from "react-redux";
import reduxStore from "./reduxStore";
import MainPageContainer from "../MainPageContainer";
import LoadingContainer from "./loading/LoadingContainer";
import "./App.css";

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="App">
        <MainPageContainer />
        <LoadingContainer />
      </div>
    </Provider>
  );
}

export default App;
