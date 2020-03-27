import React from "react";
import ProjectSummary from "./ProjectSummary";

export default function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return <ProjectSummary project={project} />;
        })}
    </div>
  );
}

//the project && line means that it won't render until projects is true
//aka projects exist
