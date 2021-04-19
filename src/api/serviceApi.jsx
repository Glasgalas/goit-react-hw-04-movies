import axios from 'axios';

const keyApi = 'fd610c2201063d823133b63dd7b45e15';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// запрос трендов
export const trendingApi = () => {
  return axios
    .get(
      `trending/movie/day?api_key=${keyApi}&include_image_language=ru&region=ua&language=ru`,
    )
    .then(resp => resp.data);
};

// запрос по названию фильма
export const searchMovieApi = searchQuery => {
  return axios
    .get(
      `search/movie?api_key=${keyApi}&language=ru&query=${searchQuery}&page=1&include_adult=false`,
    )
    .then(resp => resp.data);
};

// запрос деталей фильма по id
export const searchDetailsFilmApi = id => {
  return axios
    .get(`movie/${id}?api_key=${keyApi}&language=ru`)
    .then(resp => resp.data);
};

// запрос деталей сериала по id
export const searchDetailsTVApi = id => {
  return axios
    .get(`tv/${id}?api_key=${keyApi}&language=ru`)
    .then(resp => resp.data);
};

// запрос каста фильма по id
export const searchCastFilmApi = id => {
  return axios
    .get(`movie/${id}/credits?api_key=${keyApi}&language=ru`)
    .then(resp => resp.data);
};

// запрос отзывов на фильм по id
export const searchReviewFilmApi = id => {
  return axios
    .get(`movie/${id}/reviews?api_key=${keyApi}&language=en&page=1`)
    .then(resp => resp.data);
};
