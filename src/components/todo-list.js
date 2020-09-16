import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = () => {
  return (
    <div class="mui-row">
      <div class="mui-col-md-12">
        <ul class="mui-list--unstyled mui--appbar-height mui--appbar-line-height">
          <li class="mui-panel panel">
            <TodoListItem label="Drick coffee" />
          </li>
          <li class="mui-panel panel">
            <TodoListItem label="Build React App" important />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
