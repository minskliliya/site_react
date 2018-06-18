
import React from 'react';
import {Route, Link} from "react-router-dom";
import Work from './Work';

const Works = ({ match }) => (
  <div>
    <hr/>
    <h2>Exampels of my work</h2>
    <ul>
      <li>
        <Link to={`${match.url}/langings`}>Landing page</Link>
      </li>
      <li>
        <Link to={`${match.url}/shops`}>Shops</Link>
      </li>
      <li>
        <Link to={`${match.url}/galleries`}>Galleries</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Work} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

export default Works;