import React from "react";
import { Route } from 'react-router-dom'
import Home from '../../containers/Home'
import Articles from '../../containers/Articles'

const Content = () =>
      <div>
       <Route exact path="/" component={Home} />
       <Route path="/articles"  component={Articles}/>
       <Route path="/page3"  />
     </div>




export default Content;
