import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    return (
      <li class="mui-panel panel">
        <TodoListItem {...item} />
      </li>
    );
  });
  return (
    <div class="mui-row">
      <div class="mui-col-md-12">
        <ul class="mui-list--unstyled mui--appbar-height mui--appbar-line-height">
          {elements}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
