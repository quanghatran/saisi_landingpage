import { Route, Switch, useRouteMatch } from "react-router";
import Main from "./page/Main";



const AboutUs = () => {
    const match = useRouteMatch();
    
    return (  
        <Switch>
            <Route exact path={match.url} component={Main}/>
        </Switch>
    );
}
 
export default AboutUs;