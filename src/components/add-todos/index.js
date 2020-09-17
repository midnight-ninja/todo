import React from "react";
import "./add-todos.css";

const AddTodos = () => {
  return (
    <div className="mui-row mui--appbar-height mui--appbar-line-height add-todos">
      <div className="mui-col-md-10">
        <div className="mui-textfield">
          <input type="text" placeholder="Add Todos" />
        </div>
      </div>
      <div className="mui-col-md-2 mui--text-center">
        <button className="mui-btn mui-btn--primary">Add</button>
      </div>
    </div>
  );
};

export default AddTodos;
