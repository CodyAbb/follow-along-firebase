import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

export default function ProjectList({ projects }) {
  return (
    <div className="project-list section">
      {projects &&
        projects.map(project => {
          return (
            <Link to={`/project/${project.id}`}>
              <ProjectSummary project={project} />;
            </Link>
          );
        })}
    </div>
  );
}

//the project && line means that it won't render until projects is true
//aka projects exist
