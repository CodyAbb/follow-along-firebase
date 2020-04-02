import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore
} from "redux-firestore";
import {
  ReactReduxFirebaseProvider,
  getFirebase,
  isLoaded,
  isEmpty
} from "react-redux-firebase";
import firebase, { fbConfig } from "./config/FbConfig";
import { useSelector } from "react-redux";
import SignIn from "./components/auth/SignIn";
import Navbar from "./components/layout/Navbar";
import SignUp from "./components/auth/SignUp";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, fbConfig)
  )
);

const profileSpecificProps = {
  userProfile: "users",
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
};

const rrfProps = {
  firebase,
  config: fbConfig,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance,
  userProfile: "users", // where profiles are stored in database
  presence: "presence", // where list of online users is stored in database
  sessions: "sessions"
};

// function AuthIsLoaded({ children }) {
//   const auth = useSelector(state => state.firebase.auth);
//   if (!isLoaded(auth)) return <div>Loading Screen...</div>;
//   return children;
// }

// function PrivateRoute({ children, ...rest }) {
//   const auth = useSelector(state => state.firebase.auth);
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isLoaded(auth) && !isEmpty(auth) ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/signin",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

function PrivateRoute() {
  const auth = useSelector(state => state.firebase.auth);
  return isLoaded(auth) && !isEmpty(auth) ? (
    <App />
  ) : (
    <Redirect
      to={{
        pathname: "/signin"
        // state: { from: location }
      }}
    />
  );
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <Switch>
          <Route path="/signin">
            <Navbar />
            <SignIn />
          </Route>
          <Route path="/signup">
            <Navbar />
            <SignUp />
          </Route>
          <PrivateRoute />
        </Switch>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
