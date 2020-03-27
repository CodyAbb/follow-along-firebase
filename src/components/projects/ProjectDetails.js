import React from "react";

export default function ProjectDetails(props) {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Title - {id}</span>
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
