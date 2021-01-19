import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GetUsersContainer from "./Containers/GetUsersContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/styles.css'
import NavBar from './Components/NavBar';
import AddUserContainer from './Containers/AddUserContainer';

function App() {
  return (
    <div className="App">
      <NavBar>
        <Switch>
          <Route exact path="/addUser" component={AddUserContainer} />
          <Route exact path="/" component={GetUsersContainer} />
        </Switch>
      </NavBar>
    </div>
  );
}

export default App;
