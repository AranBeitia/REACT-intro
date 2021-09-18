import React from "react";

class NavBarItem extends React.Component {
    render() {
      return <li>{this.props.value}</li>;
    }
}

export default NavBarItem; 