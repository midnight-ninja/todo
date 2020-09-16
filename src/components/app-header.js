import React from "react";

const AppHeader = () => {
  return (
    <div className="app-header mui--appbar-height mui--appbar-line-height">
      <div className="mui-row">
        <div className="mui-col-md-7">
          <h1>ToDo List</h1>
        </div>
        <div className="mui-col-md-5 mui--text-right">
          <span className="mui--text-dark-secondary">2 more to do, 3 done</span>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
