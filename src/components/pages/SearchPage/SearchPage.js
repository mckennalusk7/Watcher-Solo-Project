import { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_SERIES" });
  }
}

export default withRouter(SearchPage);
