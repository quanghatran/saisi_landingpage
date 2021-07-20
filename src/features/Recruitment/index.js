import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PostDetails from '../../components/PostDetails';
import Recruitment from './pages/Recruitment';
import RegisterPartner from './pages/RegisterPartner';

const RecruitmentMain = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={Recruitment} />

      <Route
        exact
        path={match.url + '/dang-ky-ctv'}
        component={RegisterPartner}
      />

      <Route exact path={match.url + '/:id'}>
        <PostDetails api='Recruit' path='tuyen-nhan-su' />
      </Route>
    </Switch>
  );
};

export default RecruitmentMain;
