import React from "react";

class Hello extends React.Component{
  render() {
    return (
      <div className="greeting">
        Hello, {this.props.name}!
      </div>
    );
  }
}
export default Hello;
