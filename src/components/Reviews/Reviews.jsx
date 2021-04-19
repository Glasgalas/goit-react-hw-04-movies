import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loader from 'react-loader-spinner';
import Error from '../../components/Error/Error';

import { searchReviewFilmApi } from '../../api/serviceApi';

import s from './Reviews.module.css';

const Reviews = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState({});

  const match = useRouteMatch();

  useEffect(() => {
    reviewsFetch();
  }, []);

  const reviewsFetch = () => {
    const { movieId } = match.params;
    setLoading(true);
    searchReviewFilmApi(movieId)
      .then(data => setReviews(data.results))
      .catch(error => setError(!error))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      {error && <Error />}

      {isLoading && (
        <Loader
          className={s.loader}
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
        />
      )}

      {reviews.length > 0 ? (
        <div>
          <h3 className={s.titleReviews}>Отзывы:</h3>
          <ul className={s.reviewsList}>
            {reviews.map(({ id, author, content }) => {
              return (
                <>
                  <li className={s.reviewsItem} key={id}>
                    <blockquote className={s.comment}>
                      <cite>{author}:</cite>
                      <p className={s.text}>{content}</p>
                      <footer></footer>
                    </blockquote>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      ) : (
        <p className={s.titleReviews}>Отзывов пока не оставлено...</p>
      )}
    </div>
  );
};

Reviews.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  content: PropTypes.string,
};

export default Reviews;
