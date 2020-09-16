import React from "react";

const AppHeader = () => {
  return (
    <div class="app-header mui--appbar-height mui--appbar-line-height">
      <div class="mui-row">
        <div class="mui-col-md-7">
          <h1>ToDo List</h1>
        </div>
        <div class="mui-col-md-5 mui--text-right">
          <span class="mui--text-dark-secondary">2 more to do, 3 done</span>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
