import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li className="mui-panel panel" key={id}>
        <TodoListItem {...itemProps} />
      </li>
    );
  });
  return (
    <div className="mui-row">
      <div className="mui-col-md-12">
        <ul className="mui-list--unstyled mui--appbar-height mui--appbar-line-height">
          {elements}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
