import React from "react";
import A from "./components/A";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <A />
    </Provider>
  );
};

export default App;
