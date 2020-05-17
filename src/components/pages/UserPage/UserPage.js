import React, { Component } from "react";
import { connect } from "react-redux";

import WatchingList from "../../WatchingList/WatchingList";
import LogOutButton from "../../LogOutButton/LogOutButton";
import mapStoreToProps from "../../../redux/mapStoreToProps";
import ImageUpload from "../../ImageUpload/ImageUpload";

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_WATCHING" });
  }
  // state = {
  //   selectedFile: null,
  // };
  // fileSelectHandler = (event) => {
  //   this.setState({
  //     selectedFile: event.target.files[0],
  //   });
  // };

  // // Post route has been added

  // fileUploadHandler = (id) => (event) => {
  //   this.props.push(`/api/upload/${this.props.match.params.id}`);
  //   console.log("upload error");
  // };

  render() {
    return (
      <div>
        <div>
          <ImageUpload />
        </div>
        <div>
          <h1 id="welcome"> Welcome, {this.props.store.user.username}!</h1>{" "}
          <button id="follow-button"> Follow</button>
        </div>
        <div className="add_photo">
          {/* <input type="file" onChange={this.fileSelectHandler} />
          <button onClick={this.fileUploadHandler()}>Upload</button> */}
        </div>

        <div>
          <h2> What I am Watching</h2>
          <div>
            {this.props.store.watchingReducer.map((item, index) => {
              return <WatchingList key={index} series={item} />;
            })}
          </div>
        </div>

        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
