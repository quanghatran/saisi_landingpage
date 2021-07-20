import { Route, useRouteMatch } from "react-router";

const Admin = () => {
    const match = useRouteMatch();
    return (  
        <Route exact path={match.url} component={() => { 
            window.location.href=`http://142.93.198.23:6001`; 
            return null;
        }}/>
    );
}
 
export default Admin;