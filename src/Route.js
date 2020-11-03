import React from 'react'
import App from "./App"
import Test from "./component/test"
import {Switch,Route} from "react-router-dom"
function RouteApp() {
    return (
        <div>
              <Switch>
        <Route exact path="/" component={App}/>
        <Route  path="/item/:id" component={Test}/>
      </Switch>
        </div>
    )
}

export default RouteApp
