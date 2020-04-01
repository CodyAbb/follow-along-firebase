import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

export default function ProjectDetails(props) {
  useFirestoreConnect([
    { collection: "projects", doc: props.match.params.id, storeAs: "project" }
  ]);

  const project = useSelector(state => state.firestore.data.project);

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Title - </span>
          <p>Loremadfdasfdsfsdfdjvndlfjndslfkjnl k jadlfkdfl adfodsfnfl kan</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Cody Abbott</div>
          <div>27/04/20</div>
        </div>
      </div>
    </div>
  );
}
