import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";

import "./LandingPage.css";

class LandingPage extends Component {
  state = {
    heading: "Class Component",
  };

  onLogin = (event) => {
    this.props.history.push("/login");
  };

  //   use component did mount to dispatch an action to request the LandingPage from the API
  componentDidMount() {
    this.props.dispatch({ type: "GET_SERIES" });
  }

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>

        <div className="grid">
          <div className="grid-col grid-col_8">
            <p></p>

            <p></p>

            <p></p>
          </div>
          <div className="grid-col grid-col_4">
            <h3>Already a Member?</h3>
            <button className="btn btn_sizeFull" onClick={this.onLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
