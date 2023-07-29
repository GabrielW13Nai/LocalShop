import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Pages/Login';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


import { Switch, Route } from 'react-router-dom';

import SignUp from './Pages/SignUp';
import UserContextProvider from './Components/UserContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserContextProvider>
        {/* <SignUp /> */}
      {/* <Login /> */}
      <App />
    </UserContextProvider>


    <Switch>
      {/* <Route exact path='/admin'><Admin /></Route> */}
      {/* <Route exact path='/dashboard'><Dashboard /></Route> */}

      <Route exact path='/signup'><SignUp /></Route>
      <Route exact path='/login'><Login /></Route>
      {/* <Route exact path='/'><SignUp /></Route> */}
    </Switch>

  </BrowserRouter>

);

