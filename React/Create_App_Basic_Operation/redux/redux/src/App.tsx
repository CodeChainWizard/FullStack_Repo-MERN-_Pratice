import React from "react";
import { store } from "./app/Store.tsx";
import { Provider } from "react-redux";
import { Couter } from "./features/counter/Couter.tsx";

export function App() {
  return (
    <Provider store={store}>
      <div>
        <Couter />
      </div>
    </Provider>
  );
}
