import React from "react";
import "./search-panel.css";

const SearchPanel = () => {
  return (
    <div className="mui-row">
      <div className="mui-col-md-12">
        <div className="mui-textfield">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
