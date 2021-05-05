import axios from "axios";

const KEY = "AIzaSyB5uDVzQimPQtddI7sYqfX-_9MAwpmlY0Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  headers: {
    Accept: "application/json",
  },
  params: {
    key: KEY,
    type: "video",
    part: "snippet",
    maxResults: 5,
  },
});
