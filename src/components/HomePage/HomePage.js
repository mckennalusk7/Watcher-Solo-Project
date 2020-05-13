import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

import "./HomePage.css";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_SERIES" });
  }
  render() {
    return (
      <div>
        {this.props.store.seriesReducer.map((item, index) => {
          return <seriesList key={index} series={item} />;
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(HomePage);
