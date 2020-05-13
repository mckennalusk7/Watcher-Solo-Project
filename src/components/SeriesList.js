import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SeriesList extends Component {
  handleSelectGenre = (id) => (event) => {
    this.props.history.push(`/genre/${id}`);
  };
}
export default withRouter(SeriesList);
