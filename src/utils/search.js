import axios from "axios";

const API_KEY =
  "b-VU6ZUOOqd48WvMHNKCTa034aYkKvEBwl-ldkikwnKn23jBX8rl_HjZEUyCzgfH5YyQjny8aUklj9kRA1-XlwgrfO0OHy_TdYEqSHrligwNxrqI40E_B5gLTOv7ZXYx";
const CORS_URL = "https://cors-anywhere.herokuapp.com";
const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export function search(term, location, sortingOption) {
  const params = {
    location: location,
    term: term,
    limit: 50,
  };

  if (sortingOption) {
    params.sort_by = sortingOption;
  }

  axios
    .get(`${CORS_URL}/https://api.yelp.com/v3/businesses/search`, {
      params,
      headers: options.headers,
    })
    .then((response) => {
      console.log("results", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}
