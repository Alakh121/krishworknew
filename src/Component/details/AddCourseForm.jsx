import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

import firebase from "../../firebase";
import { uuid } from "uuidv4";
class AddCourseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      user: this.props.user,
      coursetitle: "",
      trainer: "",      
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    let { user, coursetitle, trainer, id } = this.state;
    e.preventDefault();
    console.log(this.state);
    await firebase
      .database()
      .ref("/courses")
      .child(id)
      .set({
        id,
        coursetitle,
        trainer,
      });
    this.setState({
      coursetitle: "",
      trainer: "",
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <Fragment>
        <h1 className="display-5 font-weight-bold text-uppercase my-4 border-bottom pb-2">
          Add Details
        </h1>
        <div className="card card-body my-4">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  required
                  value={this.state.coursetitle}
                  onChange={this.handleChange}
                  name="coursetitle"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  required
                  value={this.state.trainer}
                  onChange={this.handleChange}
                  name="trainer"
                />
              </div>
              
              <div className="col-md-12 my-2">
                <button className="btn btn-dark mt-2">Add Details</button>
              </div>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(AddCourseForm);
