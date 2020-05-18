import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";
import WatchingList from "../../WatchingList/WatchingList";

// poster images uploaded

import ozark from "../../Posters/ozark.jpg";
import deadToMe from "../../Posters/deadToMe.jpg";
import theLastDance from "../../Posters/theLastDance.jpg";
import thisIsUs from "../../Posters/thisIsUs.jpg";
import tigerKing from "../../Posters/tigerKing.jpg";
import Unorthodox from "../../Posters/Unorthodox.jpg";

import "./HomePage.css";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_WATCHING" });
  }
  render() {
    return (
      <div>
        <div xs={6} md={4}>
          <img src={ozark} alt="ozark" />
        </div>
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
      </div>
    );
  }
}

export default connect(mapStoreToProps)(HomePage);
