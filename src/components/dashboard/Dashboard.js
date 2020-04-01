import React from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { useDispatch, useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

export default function Dashboard() {
  useFirestoreConnect([{ collection: "projects" }]);

  // const projects = useSelector(state => state.project.projects);
  const projects = useSelector(state => state.firestore.ordered.projects);
  // console.log(dbProjects);

  // console.log(projects);

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
}
