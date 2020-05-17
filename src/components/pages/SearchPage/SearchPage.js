import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchPage extends Component {
  state = {
    genres: "",
  };

  onInputChange = (input) => (event) => {
    this.setState(
      {
        [input]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <h2> TV Series Search </h2>
        <div>
          <input type="text" onChange={this.onInputChange("genres")}></input>
          <button onClick={this.onSearchClick}> Next </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchPage);
