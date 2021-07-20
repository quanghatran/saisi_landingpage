import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Main from './page/Main';
import NotFound from '../../components/NotFound';

const Contact = () => {
    const match = useRouteMatch();

    return (  
        <Switch>
            <Route exact path={match.url} component={Main}/>

            <Route component={NotFound} />
        </Switch>
    );
}
 
export default Contact;