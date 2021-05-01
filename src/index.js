import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { latitude: null, errorMessage: "" };

  render() {
    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    // !this.state.errorMessage
    if (this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }

    // !this.state.errorMessage && !this.state.latitude
    return <Spinner message="Please accept location request" />;
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  componentDidUpdate() {}
}

ReactDOM.render(<App />, document.getElementById("root"));
