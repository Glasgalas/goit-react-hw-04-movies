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

// асинхронный запрос деталей фильма
export const searchDetailsFilm = async id => {
  try {
    const { data } = await axios.get(
      `movie/${id}?api_key=${keyApi}&language=ru`,
    );
    return data;
  } catch (error) {
    console.error('errrror(((', error);
  }
};

// запрос трейлера по id
export const searchTrailer = async id => {
  try {
    const { data } = await axios.get(
      `movie/${id}/videos?api_key=${keyApi}&language=ru`,
    );
    return data;
  } catch (error) {
    console.error('error(', error);
  }
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

// запрос инфо об актере по id
export const searchDetailsActor = async id => {
  try {
    const { data } = await axios.get(
      `person/${id}?api_key=${keyApi}&language=ru`,
    );
    return data;
  } catch (error) {
    console.error('error', error);
  }
};

// запрос фильмов с участием актера
export const searchMoviesWithPerson = async id => {
  try {
    const { data } = await axios.get(
      `person/${id}/movie_credits?api_key=${keyApi}&language=ru`,
    );
    return data;
  } catch (error) {
    console.error('error', error);
  }
};
