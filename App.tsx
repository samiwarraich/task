import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@src/redux/store";
import Main from "@src/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
