import React from "react";
import { Route, Switch } from 'react-router-dom'
import Home from '../../containers/Home'
import Articles from '../../containers/Articles'
import Utilisateurs from '../../containers/Utilisateurs'
import Albums from '../../containers/Albums'
import Page404 from '../../containers/Page404'

const Content = ({...props}) =>
      <div>
      <Switch>
         <Route exact path="/"
           render={() => <Home {...props}  />} />
         <Route path="/articles"
           render={() => <Articles {...props}  />} />
         <Route path="/utilisateurs"
           render={() => <Utilisateurs {...props}  />} />
         <Route path="/albums"
           render={() => <Albums {...props}  />} />
         <Route path="*" component={Page404} />
       </Switch>

     </div>




export default Content;
