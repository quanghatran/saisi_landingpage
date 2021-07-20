import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Prestige from './page/Prestige';
import Categories from './page/Categories';
import Main from './page/Main';
import Introduction from './page/Introduction';
import NotFound from '../../components/NotFound';

const Home = () => {
    const match = useRouteMatch();

    return (  
        <Switch>
            <Route exact path={match.url} component={Main} />
        
            <Route path={match.url + 'nganh/:id'} component={Categories}/>
            <Route path={match.url + 'uy-tin/:id'} component={Prestige}/>
            <Route path={match.url + 'gioi-thieu/:id'} component={Introduction}/>
        
            <Route component={NotFound}/>
        </Switch>
    );
}
 
export default Home;