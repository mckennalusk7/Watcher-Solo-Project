import React, { Component } from "react";
import { connect } from "react-redux";

import LogOutButton from "../../LogOutButton/LogOutButton";
import mapStoreToProps from "../../../redux/mapStoreToProps";

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  fileSelectHandler = (event) => {
    console.log(event.target.files[0]);
  };

  render() {
    return (
      <div>
        <div>
          <h1 id="welcome"> Hello, {this.props.store.user.username}!</h1>{" "}
          <button id="follow-button"> Follow</button>
        </div>
        <div className="add_photo">
          <input type="file" onChange={this.fileSelectHandler} />
          <button onClick={this.fileUploadHandler}>Upload</button>
        </div>

        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
