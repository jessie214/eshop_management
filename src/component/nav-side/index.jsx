import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavSide extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <div className="navbar-default navbar-side" role="navigation">
      <div className="sidebar-collapse">
          <ul className="nav">
              <li>
                  <NavLink activeClassName="active-menu" exact to="/"><i className="fa fa-dashboard"></i> Home</NavLink>
              </li>  
              <li className="active"> 
                  <Link to="/product">
                    <i className="fa fa-sitemap"></i>
                    <span>Product</span>
                    <span className="fa arrow"></span>
                  </Link>
                  <ul className="nav nav-second-level collapse in">
                      <li>
                         <NavLink activeClassName="active-menu" to="/product">Product Management</NavLink>
                      </li>
                      <li>
                          <NavLink activeClassName="active-menu" to="/product.category">Category Management</NavLink>
                      </li>                      
                  </ul>
              </li>
              <li className="active"> 
                  <Link to="/order">
                    <i className="fa fa-sitemap"></i>
                    <span>Order</span>
                    <span className="fa arrow"></span>
                  </Link>
                  <ul className="nav nav-second-level collapse in">
                      <li>
                      <NavLink activeClassName="active-menu" to="/order">Order Management</NavLink>
                      </li>                                         
                  </ul>
              </li>
              <li className="active"> 
                  <Link to="/user">
                    <i className="fa fa-sitemap"></i>
                    <span>User</span>
                    <span className="fa arrow"></span>
                  </Link>
                  <ul className="nav nav-second-level collapse in">
                      <li>
                      <NavLink activeClassName="active-menu" to="/user">User Management</NavLink>
                      </li>                   
                  </ul>
              </li>
          </ul>
      </div>
  </div>
    );
  }
}

export default NavSide;