import React, { Component } from "react";
import { connect } from "react-redux";
import Image from "react-bootstrap/Image";

import WatchingList from "../../WatchingList/WatchingList";
import LogOutButton from "../../LogOutButton/LogOutButton";
import mapStoreToProps from "../../../redux/mapStoreToProps";
import ImageUpload from "../../ImageUpload/ImageUpload";

// poster images uploaded

import ozark from "../../Posters/ozark.jpg";
import deadToMe from "../../Posters/deadToMe.jpg";
import theLastDance from "../../Posters/theLastDance.jpg";
import thisIsUs from "../../Posters/thisIsUs.jpg";
import tigerKing from "../../Posters/tigerKing.jpg";
import Unorthodox from "../../Posters/Unorthodox.jpg";
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
          <container>
            <row>
              <h2 id="watching"> What I am Watching</h2>

              <col xs={6} md={4}>
                <image src={ozark} alt="ozark" />
              </col>
              <div className="deadToMe">
                <img src={deadToMe} alt="deadToMe" />
              </div>
              <div className="theLastDance">
                <img src={theLastDance} alt="theLastDance" />
              </div>
              <div className="thisIsUs">
                <img src={thisIsUs} alt="thisIsUs" />
              </div>
              <div className="tigerKing">
                <img src={tigerKing} alt="tigerKing" />
              </div>
              <div className="unorthodox">
                <img src={Unorthodox} alt="unorthodox" />
              </div>
            </row>
          </container>

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
