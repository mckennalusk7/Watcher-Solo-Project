import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";
import SeriesList from "../../SeriesList/SeriesList";

import "./HomePage.css";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_SERIES" });
  }
  render() {
    return (
      <div>
        <h1> Your Top Series</h1>
        <div>
          {this.props.store.seriesReducer.map((item, index) => {
            return <SeriesList key={index} series={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(HomePage);
