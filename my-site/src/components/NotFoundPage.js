import React from 'react';
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <div>
    <hr/>
    <h3>404 - <Link to="/" >Go home</Link></h3>
  </div> 
);

export default NotFoundPage;