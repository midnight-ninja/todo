import React from "react";
import ReactDOM from "react-dom";

const el = (
  <div class="mui-container">
    {/* app-header */}
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
    {/* search-panal */}
    <div class="mui-row">
      <div class="mui-col-md-12">
        <div class="mui-textfield">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
    {/* doto-list */}
    <div class="mui-row">
      <div class="mui-col-md-12">
        <ul class="mui-list--unstyled mui--appbar-height mui--appbar-line-height">
          <li class="mui-panel panel">
            <div class="mui-row todo-list-item">
              <div class="mui-col-md-6">
                <span class="label">Learn React</span>
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
          </li>
          <li class="mui-panel panel">
            <div class="mui-row todo-list-item">
              <div class="mui-col-md-6">
                <span class="label">Build Awesome App</span>
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
          </li>
        </ul>
      </div>
    </div>
  </div>
);

ReactDOM.render(el, document.getElementById("root"));
