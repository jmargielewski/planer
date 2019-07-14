import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { ApplicationState } from '../../store';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

interface Props {
  projects: any;
}

class Dashboard extends Component<Props> {
  render() {
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  projects: state.firestore.ordered.projects,
});

export default compose<any>(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }]),
)(Dashboard);
