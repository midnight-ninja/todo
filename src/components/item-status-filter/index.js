import React from "react";
import "./item-status-filter.css";
const ItemStatusFilter = () => {
  return (
    <div className="mui-row app-status-filter">
      <div className="mui-col-md-12 mui--text-center">
        <button className="mui-btn mui-btn--flat mui-btn--primary active">
          All
        </button>
        <button className="mui-btn mui-btn--flat mui-btn--primary">
          Active
        </button>
        <button className="mui-btn mui-btn--flat mui-btn--primary">Done</button>
      </div>
    </div>
  );
};

export default ItemStatusFilter;
