const initState = {
  projects: [
    { id: "1", title: "World map gam", body: "blah badfdfs dasf df" },
    { id: "2", title: "World games fun", body: "blah badfdfs dasf df" },
    { id: "3", title: "Rams", body: "blah badfdfs dasf df" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("project creation error", action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
