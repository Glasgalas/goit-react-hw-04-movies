import { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { useRouteMatch, useLocation, useHistory } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import Error from '../../components/Error/Error';
import ActorItemDetails from '../../components/ActorItemDetails/ActorItemDetails';
import Jobs from '../../components/Jobs/Jobs';
import Back from '../../components/Button/Button';

import { searchDetailsActor } from '../../api/serviceApi';

import s from './ActorDetailsPage.module.css';

export default function ActorDetailsPage() {
  const [actor, setActor] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    actorFetchID();
  }, []);

  const actorFetchID = async () => {
    const { personId } = match.params;
    setLoading(true);

    try {
      const result = await searchDetailsActor(personId);
      setActor(result);
    } catch (error) {
      setError(!error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    history.push(location?.state?.from || '/');
  };

  return (
    <>
      {error && <Error />}
      <Back goBack={handleBack} />
      <ActorItemDetails actor={actor} />
      {isLoading && (
        <Loader
          className={s.loader}
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
        />
      )}
      <div>
        <ul className={s.nav}>
          <li>
            <Link
              className={s.link}
              to={{
                pathname: `${match.url}/jobs`,
                state: { ...location.state },
              }}
            >
              Работы
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path={`${match.path}/jobs`} component={Jobs} />
      </Switch>
    </>
  );
}
