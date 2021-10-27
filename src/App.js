import React, { Component, Fragment } from "react";
import firebase from "./firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderComponent from "./Component/Header/HeaderComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import LoginComponent from "./Component/Auth/LoginComponent";
import RegisterComponent from "./Component/Auth/RegisterComponent";
import PageNotFoundComponent from "./Component/PageNotFound/PageNotFoundComponent";
import HomeComponent from "./Component/HomeComponent/HomeComponent";
import SidebarComponent from "./Component/SidebarComponent/SidebarComponent";
import PasswordReset from "./Component/Auth/PasswordReset";
import UpdatePhoto from "./Component/Auth/updatePhoto";
import AddDetails from "./Component/courses/AddCourse";
import GetDetails from "./Component/courses/GetCourses";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  async componentDidMount() {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.history.push("/");
        this.setState({ userData: user });
      } else {
        this.props.history.push("/login");
        this.setState({ userData: "" });
      }
    });
  }

  render() {
    return (
      <Fragment>
        <Router>
          <header>
            <HeaderComponent user={this.state.userData} />
          </header>
          {this.state.userData ? (
            <SidebarComponent user={this.state.userData} />
          ) : null}
          <ToastContainer />
          <main className="container">
            <Switch>
              <Route path="/" exact component={HomeComponent} />
              <Route path="/login" exact component={LoginComponent} />
              <Route path="/register" exact component={RegisterComponent} />
              <Route path="/password-reset" exact component={PasswordReset} />
              {this.state.userData ? (
                <Fragment>
                  <Route
                    path="/update-photo"
                    component={() => <UpdatePhoto user={this.state.userData} />}
                  />

                  <Route
                    path="/add-details"
                    component={() => <AddDetails user={this.state.userData} />}
                  />
                  <Route
                    path="/get-course"
                    component={() => <GetDetails user={this.state.userData} />}
                  />
                  <Route
                    path="/add-video"
                    component={() => (
                      <AddVideoForm user={this.state.userData} />
                    )}
                  />
                  
                </Fragment>
              ) : null}

              <Route path="**" component={PageNotFoundComponent} />
            </Switch>
          </main>
        </Router>
      </Fragment>
    );
  }
}

export default withRouter(App);
