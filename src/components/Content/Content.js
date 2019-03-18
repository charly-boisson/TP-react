import React from "react";
import { Route } from 'react-router-dom'
import Home from '../../containers/Home'

const Content = () =>
      <div>
       <Route exact path="/" component={Home} />
       <Route path="/page2"  />
       <Route path="/page3"  />
     </div>




export default Content;
