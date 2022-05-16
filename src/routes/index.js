import { Redirect } from "react-router-dom";
import {Route, Switch} from "react-router-dom";
import { MasterLayout } from "../page/layout/masterLayout";

export const MainRouter = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <Redirect to="/origins"/>                
            </Route>               
            <MasterLayout/>
        </Switch>
    )
}