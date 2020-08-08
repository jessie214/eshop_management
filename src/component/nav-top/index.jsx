import React from 'react';
import { Link } from 'react-router-dom';

class NavTop extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  
  Logout(){
    
  }
  render(){
    return(
      <div className="navbar navbar-default top-navbar" role="navigation">
      <div className="navbar-header">          
          <Link to="/" className="navbar-brand" href="index.html"><b>E</b>shop</Link>
      </div>

      <ul className="nav navbar-top-links navbar-right">                  
          <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#top" >
                  <i className="fa fa-user fa-fw"></i> 
                  <span>welcome!</span>
                  <i className="fa fa-caret-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-user"> 
                  <li>
                    <a onClick={()=> {this.onLogout()}} href="#top">
                      <i className="fa fa-sign-out fa-fw"></i> 
                      <span>Logout</span>
                    </a>
                  </li>
              </ul>              
          </li>          
      </ul>
  </div>
    );
  }
}

export default NavTop;