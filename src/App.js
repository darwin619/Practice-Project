import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Header from './Components/Header/Header';
import Apod from './Pages/Apod/Apod';
import SearchPage from './Pages/SearchPage/SearchPage';
import SearchImagePage from './Pages/SearchImagePage/SearchImagePage';
import ListPage from './Pages/ListPage/ListPage';
import SignIn from './Pages/SignIn/SignIn';
import SignOut from './Pages/SignOut/SignOut';
import { withRouter } from "react-router";


function App(props) {
  return (
    <div className="App">
      <Header currentRoute={props.location.pathname} />      
      <Route exact path="/" component={Homepage} />
      <Route exact path="/pictureoftheday" component={Apod} />
      <Route exact path="/searchpage" component={SearchPage} />
      <Route exact path="/searchpage/results" component={SearchPage} />
      <Route exact path="/imagepage/:searchId" component={SearchImagePage} />
      <Route exact path="/mylist" component={ListPage} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signout" component={SignOut} />
    </div>
  );
}

export default withRouter(App);
