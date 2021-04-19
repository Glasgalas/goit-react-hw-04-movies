import s from './Error.module.css';

const Error = () => (
  <div className={s.error}>
    <h3 className={s.errorTitle}>Ошибка 😯</h3>
    <p className={s.errorText}>Что-то пошло не так...</p>
  </div>
);

export default Error;
