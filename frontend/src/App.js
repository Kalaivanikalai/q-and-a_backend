import React, {useEffect } from 'react';
import './App.css';
import Header from './component/Header/Header';
import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import Question from './component/Add-Question/Question';
import ViewQuestion from './component/ViewQuestion';
import StackOverflow from './component/StackOverflow';
import Auth from './component/Auth';
// import { useDispatch, useSelector } from 'react-redux';
// import { login, logout, selectUser } from './features/userSlice';
// import { auth } from './firebase';
 


function App() {

  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) =>{
  //     if(authUser){
  //       dispatch(
  //         login({
  //           uid:authUser.uid,
  //           photo : authUser.photoURL,
  //           displayName : authUser.displayName,
  //           email: authUser.email,
  //         })
  //       );
  //     }else{
  //       dispatch(logout());
  //     }
  //   });
  // }, [dispatch]);

  // const PrivateRoute = ({ component: Component, ...rest }) => (
  //   <Route
  //     {...rest}
  //     render={(props) =>
  //       user ? (
  //         <Component {...props} />
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: "/auth",
  //             state: {
  //               from: props.location,
  //             },
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route exact path="/auth" component={Auth} />
          <Route exact path="/" component={StackOverflow} />
          <Route exact path="/add-question" component={Question} />
          <Route exact path="/question" component={ViewQuestion} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
