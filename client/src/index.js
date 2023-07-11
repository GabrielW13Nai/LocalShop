import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Pages/Login';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { Switch, Route } from 'react-router-dom';

import SignUp from './Pages/SignUp';
import UserContextProvider from './Components/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
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

  </React.StrictMode>
  </BrowserRouter>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
