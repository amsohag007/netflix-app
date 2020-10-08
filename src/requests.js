const API_KEY = "799e22d5f2a05f3d0d48ae8aaf8aa251";
const requests = {
  fetchTranding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fethTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fectchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fectchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fectchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fectchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fectchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
