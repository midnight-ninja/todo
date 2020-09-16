import React from "react";

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "black",
  };

  return (
    <div className="mui-row todo-list-item">
      <div className="mui-col-md-6">
        <span className="label" style={style}>
          {label}
        </span>
      </div>
      <div className="mui-col-md-6 mui--text-right">
        <button className="mui-btn mui-btn--fab mui-btn--small mui-btn--primary">
          <i className="fas fa-exclamation"></i>
        </button>
        <button className="mui-btn mui-btn--fab mui-btn--small mui-btn--danger">
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
