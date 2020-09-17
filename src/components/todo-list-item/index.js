import React from "react";
import "./todo-list-item.css";

export default class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState({
      done: true,
    });
  };
  onExclamationClick = () => {
    this.setState({
      important: true,
    });
  };

  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    const style = {
      color: important ? "tomato" : "black",
    };
    let className = "todo-list-item";
    if (done) {
      className += " done";
    }
    if (important) {
      className += " important";
    }

    return (
      <div className="mui-row">
        <div className="mui-col-md-10 mui-col-xs-6">
          <span className={className} style={style} onClick={this.onLabelClick}>
            {label}
          </span>
        </div>
        <div className="mui-col-md-2 mui-col-xs-6 mui--text-right">
          <button
            className="mui-btn mui-btn--fab mui-btn--small mui-btn--primary btn-item"
            onClick={this.onExclamationClick}
          >
            <i className="fas fa-exclamation"></i>
          </button>
          <button className="mui-btn mui-btn--fab mui-btn--small mui-btn--danger btn-item">
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    );
  }
}
