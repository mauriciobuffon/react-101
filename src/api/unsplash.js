import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 7-7rOl-3Rt6Cqf2m0VFv2LpxTBKQIfcVkScsIt-O1Yw",
  },
});
