import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-item";
import AddTodos from "../add-todos";

const App = () => {
  const todoData = [
    { label: "Drink coffee", important: false, id: 1 },
    { label: "Make Awesome", important: true, id: 2 },
    { label: "Have a lanch", important: false, id: 3 },
  ];

  return (
    <div className="mui-container">
      <AppHeader toDo={todoData.length} done={3} />
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList todos={todoData} />
      <AddTodos />
    </div>
  );
};

export default App;
