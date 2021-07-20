import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Main from './page/Main';
import PostDetails from '../../components/PostDetails';


const Posts = () => {
    const match = useRouteMatch();

    return (
      <Switch>
        <Route exact path={match.url} component={Main} />

        <Route
          path={match.url + '/:id'}
        ><PostDetails api='Posts' path='tin-tuc' /></Route>
      </Switch>
    );
}
 
export default Posts;