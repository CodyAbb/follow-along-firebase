export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // call to db then async here
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authId = getState().firebase.auth.uid;

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project: project });
      })
      .catch(error => {
        dispatch({ type: "CREATE_PROJECT_ERROR", error });
      });
  };
};
