import React, { Fragment } from "react";
import "./App.css";

//components
import InputTodo from "./Components/InputTodo";
import ListTodo from "./Components/ListTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  );
}

export default App;
