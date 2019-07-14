import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { ApplicationState } from '../../store';

const ProjectDetails = (props: any) => {
  const { project } = props;

  if (project) {
    const { authorFirstName, authorLastName, content, title } = project;
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {authorFirstName} {authorLastName}
            </div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container center">
      <p>Loading project...</p>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState, ownProps: any) => {
  const { id } = ownProps.match.params;
  const { projects } = state.firestore.data;
  const project = projects ? projects[id] : null;

  return {
    project,
  };
};

export default compose<any>(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }]),
)(ProjectDetails);
