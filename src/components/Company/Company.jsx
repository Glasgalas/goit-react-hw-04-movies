import s from './Company.module.css';

const Company = ({ companies }) => {
  return (
    <>
      <ul className={s.logos}>
        {companies &&
          companies.map(({ id, name }) => {
            return (
              <li className={s.logo} key={id}>
                <span>{name}</span>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default Company;
