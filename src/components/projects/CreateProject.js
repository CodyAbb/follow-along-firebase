import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "../../store/actions/ProjectActions";

export default function CreateProject(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleChange = event => {
    if (event.target.id === "title") {
      setTitle(event.target.value);
    } else if (event.target.id === "content") {
      setContent(event.target.value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const project = {
      title: title,
      content: content
    };
    // console.log(project);

    dispatch(createProject(project));
    props.history.push("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create New Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            id="content"
            onChange={handleChange}
            className="materialize-textarea"
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
}
