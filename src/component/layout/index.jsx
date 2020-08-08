import React from 'react';
import NavSide from '../nav-side/index';
import NavTop from '../nav-top/index';
// import Home from '../../pages/home';
import './theme.css';
import '.../../../src/static/fontawesome.css'

class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state={ }
  }
  render(){
    return(
      <div id="wrapper">
        <NavTop/>
        <NavSide/>       
        {this.props.children}</div>
    )
  }
}

export default Layout;