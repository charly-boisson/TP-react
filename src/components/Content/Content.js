import React from "react";
import { Route } from 'react-router-dom'
import Home from '../../containers/Home'
import Article from '../../containers/Article'
import Utilisateurs from '../../containers/Utilisateurs'
import Albums from '../../containers/Albums'


const Content = () =>
      <div>
       <Route exact path="/" component={Home} />
       <Route path="/articles" component={Article}  />
       <Route path="/utilisateurs" component={Utilisateurs}  />
       <Route path="/albums" component={Albums}  />

     </div>




export default Content;
