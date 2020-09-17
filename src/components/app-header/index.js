import React from "react";
import "./app-header.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header mui--appbar-height mui--appbar-line-height">
      <div className="mui-row">
        <div className="mui-col-md-7 mui-col-xs-7">
          <h1>ToDo List</h1>
        </div>
        <div className="mui-col-md-5 mui-col-md-5 mui--text-right">
          <span className="mui--text-dark-secondary">
            {toDo} more to do, {done} done
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
