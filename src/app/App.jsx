import React from "react";
import { Provider } from "react-redux";
import reduxStore from "./reduxStore";
import MainPageContainer from "../MainPageContainer";
import LoadingContainer from "./loading/LoadingContainer";

function App() {
  return (
    <Provider store={reduxStore}>
      <MainPageContainer />
      <LoadingContainer />
    </Provider>
  );
}

export default App;
