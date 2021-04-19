import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './Searchform.module.css';

const Searchform = ({ onChange }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!query) {
      return;
    }
    onChange(query);

    setQuery('');
  };

  return (
    <div>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          value={query}
          onChange={handleChange}
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Что мы ищем?"
        />
      </form>
    </div>
  );
};

Searchform.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Searchform;
