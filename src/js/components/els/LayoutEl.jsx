import React from "react";

export default class LayoutEl extends React.Component {
  render() {
    return(
      <div>
        <header>Header</header>
        {this.props.children}
        <footer>Footer</footer>
      </div>
    );
  }
}
