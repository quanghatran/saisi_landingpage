import { Route, Switch, useRouteMatch } from 'react-router-dom';
import JobAir from './page/JobAir';
import JobAirDetails from './page/JobAirDetails';


const StartUp = () => {
    const match = useRouteMatch();

    return (  
        <Switch>
            <Route exact path={match.url} component={JobAir} />
        
            <Route path={match.url + '/:id'} component={JobAirDetails} />
        </Switch>
    );
}
 
export default StartUp;