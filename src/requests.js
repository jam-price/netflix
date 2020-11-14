const API_KEY = "25619a47ad61549b45f9e4ad7e456890";

const url = "https://api.themoviedb.org/3";

const requests = {
  trending: url + `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflixOriginals: url + `/discover/tv?api_key=${API_KEY}&with_network=213`,
  topRatedMovie: url + `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  topRatedTv: url + `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  actionMovies: url + `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: url + `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: url + `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanceMovies: url + `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: url + `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
