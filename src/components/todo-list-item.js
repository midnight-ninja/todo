import React from "react";

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "black",
  };

  return (
    <div class="mui-row todo-list-item">
      <div class="mui-col-md-6">
        <span class="label" style={style}>
          {label}
        </span>
      </div>
      <div class="mui-col-md-6 mui--text-right">
        <button class="mui-btn mui-btn--fab mui-btn--small mui-btn--primary">
          <i class="fas fa-exclamation"></i>
        </button>
        <button class="mui-btn mui-btn--fab mui-btn--small mui-btn--danger">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
