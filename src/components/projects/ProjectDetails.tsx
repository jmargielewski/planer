import React from 'react';

const ProjectDetails = props => {
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae veniam
            provident quibusdam facere rem earum error, totam dignissimos quaerat
            possimus, accusamus vero minima doloribus non iure ullam accusantium nemo
            incidunt.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Kuba</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
