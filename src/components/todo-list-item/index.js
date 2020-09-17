import React from "react";
import "./todo-list-item.css";

export default class TodoListItem extends React.Component {
  state = {
    done: false,
  };

  onLabelClick = () => {
    this.setState({
      done: true,
    });
  };

  render() {
    const { label, important = false } = this.props;
    const style = {
      color: important ? "tomato" : "black",
    };
    const { done } = this.state;
    let className = done ? "label" + " done" : "label";

    return (
      <div className="mui-row todo-list-item">
        <div className="mui-col-md-10 mui-col-xs-6">
          <span className={className} style={style} onClick={this.onLabelClick}>
            {label}
          </span>
        </div>
        <div className="mui-col-md-2 mui-col-xs-6 mui--text-right">
          <button className="mui-btn mui-btn--fab mui-btn--small mui-btn--primary">
            <i className="fas fa-exclamation"></i>
          </button>
          <button className="mui-btn mui-btn--fab mui-btn--small mui-btn--danger">
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    );
  }
}
