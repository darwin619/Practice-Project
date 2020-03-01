import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Header from './Components/Header/Header';
import Apod from './Pages/Apod/Apod';
import SearchPage from './Pages/SearchPage/SearchPage';
import SearchImagePage from './Pages/SearchImagePage/SearchImagePage';
import ListPage from './Pages/ListPage/ListPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/pictureoftheday" component={Apod} />
      <Route exact path="/searchpage" component={SearchPage} />
      <Route exact path="/searchpage/results" component={SearchPage} />
      <Route exact path="/imagepage/:searchId" component={SearchImagePage} />
      <Route exact path="/mylist" component={ListPage} />
    </div>
  );
}

export default App;
