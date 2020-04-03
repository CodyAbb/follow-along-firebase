import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import moment from "moment";
import { NavLink } from "react-router-dom";

export default function ProjectDetails(props) {
  useFirestoreConnect([
    { collection: "projects", doc: props.match.params.id, storeAs: "project" }
  ]);

  const project = useSelector(state => state.firestore.data.project);

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          <i class="material-icons">arrow_back</i>
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
}
