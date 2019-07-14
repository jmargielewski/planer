import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Project } from '../../store/project/types';

import * as actions from '../../store/project/actions';

interface Props {
  createProject: (project: Project) => {};
}

class CreateProject extends Component<Props> {
  public state = {
    title: '',
    content: '',
  };

  private handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  private handleSubmit = (e: any) => {
    e.preventDefault();
    const { createProject } = this.props;
    createProject({ id: 1, ...this.state });
  };

  public render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              onChange={this.handleChange}
              cols={30}
              rows={10}
              className="materialize-textarea"
            />
          </div>
          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(CreateProject);
