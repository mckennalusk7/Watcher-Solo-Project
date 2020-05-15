import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class WatchingList extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2> {this.props.watching.series}</h2>
        </div>
        <div key={this.props.watching.id}>
          <div>
            <h4> Episode: {this.props.watching.episode}</h4>
          </div>
          <div>
            <h4>Season: {this.props.watching.season}</h4>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(WatchingList);
