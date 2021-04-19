import PropTypes from 'prop-types';

import s from './Button.module.css';

const Back = ({ goBack }) => {
  return (
    <button className={s.button} type="button" onClick={goBack}>
      Вернуться
    </button>
  );
};

Back.propTypes = {
  goBack: PropTypes.func.isRequired,
};
export default Back;
