//import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import UserContextProvider from './Components/UserContext';

function App() {
  return (
    <>
    <div className="App">
      {/* <h1>Local-Shop</h1> */}

      {/* <Login /> */}
      <UserContextProvider>
        <Admin />
      </UserContextProvider>
    </div>
    </>
  );
}

export default App;
