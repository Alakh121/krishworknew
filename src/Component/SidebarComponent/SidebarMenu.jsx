import React, { Component, Fragment } from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
class SidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
    };
  }
  render() {
    return (
      <Fragment>
        <div className="row" id="body-row">
          <div className="col-md-2 p-0">
            <div
              id="sidebar-container"
              className="sidebar-expanded d-none d-md-block"
            >
              <ul className="list-group">
                <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed"></li>
                
                <a
                  href="#submenu1"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="bg-dark list-group-item list-group-item-action flex-column align-items-start"
                >
                  <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="fa fa-dashboard fa-fw mr-3" />
                    <span className="menu-collapsed">Dashboard</span>
                    <span className="submenu-icon ml-auto" />
                  </div>
                </a>
                <div id="submenu1" className="collapse sidebar-submenu">
                  <Link
                    to="/add-details"
                    className="list-group-item list-group-item-action bg-dark text-white"
                  >
                    <span className="menu-collapsed">Add Details</span>
                  </Link>
                  
                </div>
              </ul>
            </div>
          </div>
          <div className="col-md-10"></div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(SidebarMenu);
