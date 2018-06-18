import React from 'react';

const Work = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Work;