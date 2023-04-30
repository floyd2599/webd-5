import React from 'react';

import { BrowserRouter, Route } from "react-router-dom";
import DisplayTodo from "Components\DisplayTodo.js";
import CreateTodo from "Components\CreateTodo.js";

import "./App.css";

function App() {
  return (
    <div className="todo-Container">
      <BrowserRouter>
        <Route exact path="/" component={DisplayTodo} />
        <Route path="/add-list" component={CreateTodo} />
      </BrowserRouter>
    </div>
  );
}

export default App;