export const API_URL = "https://api.themoviedb.org/3";

const endpoint = "/discover/movie";

export const API_KEY = "?api_key=0d6fea5579aa71ef103b1cbf982f0a98";

export const getMoviesEndpointPopular =
  API_URL +
  endpoint +
  API_KEY +
  "&language=en-US&sort_by=popularity.desc&page=1";

export const getMoviesEndpointAction =
  API_URL + endpoint + API_KEY + "&with_genres=28";

export const getMoviesEndpointComedy =
  API_URL + endpoint + API_KEY + "&with_genres=35";

export const getMoviesEndpointFamily =
  API_URL + endpoint + API_KEY + "&with_genres=10751";

export const getMoviesEndpointHorror =
  API_URL + endpoint + API_KEY + "&with_genres=27";

export const getMoviesEndpointThriller =
  API_URL + endpoint + API_KEY + "&with_genres=53";
