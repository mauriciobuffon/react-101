import React from "react";
import axios from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);

    this.state = { images: [] };
  }

  // componentDidMount() {}
  // componentDidUpdate() {}

  onSearchSubmit(term) {
    axios
      .get("/search/photos", {
        params: { query: term },
      })
      .then(
        (response) => {
          this.setState({ images: response.data.results });
        },
        (error) => console.log(error)
      );
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
