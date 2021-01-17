
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch ,Redirect} from 'react-router-dom';

import ViewPlayer from "./components/ViewPlayer/view";
 import ListOfSongs from "./components/ListOfSongs/songs";
import CreatePlayList from "./components/CreatePlayList/playlist";
import ViewPlaylist from "./components/CreatePlayList/viewPlaylist";

class App extends React.Component {
  render() {
    return (
     
      <BrowserRouter>
      <Switch>
       <Route path="/create">
          <ViewPlayer/>
        </Route> 
        <Route exact path="/viewSongs">
          <ListOfSongs />
        </Route>
        <Route exact path="/createPlaylist">
          <CreatePlayList />
        </Route>
        <Route exact path="/viewPlaylist">
          <ViewPlaylist />
        </Route>
        <Redirect from="/*" to="/create" />
      </Switch>
    </BrowserRouter>
  
    );
  }
}
export default App;

