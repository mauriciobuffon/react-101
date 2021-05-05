import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  constructor(args) {
    super(args);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);

    this.state = { videos: [], selectedVideo: null };
  }

  componentDidMount() {
    this.onSearchSubmit("goku ultra instinct");
  }

  onSearchSubmit(term) {
    youtube
      .get("/search", {
        params: { q: term },
      })
      .then(
        (response) => {
          this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
          });
        },
        (error) => console.log(error)
      );
  }

  onVideoSelect(video) {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
