import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  const todoData = [
    { label: "Drink coffee", important: false },
    { label: "Make Awesome", important: true },
    { label: "Have a lanch", important: false },
  ];

  return (
    <div class="mui-container">
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
