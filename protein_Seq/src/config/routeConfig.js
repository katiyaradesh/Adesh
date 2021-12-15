import React from "react";
import { Switch, Route } from "react-router-dom";
import Genomics from '../pages/Genomics/index';

function Router() {
    return (
        <Switch>
            <Route exact path={["/", "/genomics"]} component={Genomics} />
        </Switch>
    );
}

export default Router;
