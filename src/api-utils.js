const API_URL = "https://api.themoviedb.org/3";

const endpoint = "/discover/movie";

const API_KEY = "?api_key=0d6fea5579aa71ef103b1cbf982f0a98";

export const getMoviesEndpointPopular =
  API_URL + endpoint + API_KEY + "&language=en-US&sort_by=popularity.desc&page=1";

