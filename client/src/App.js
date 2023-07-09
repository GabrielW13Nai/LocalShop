// import logo from './logo.svg';
import './App.css';
import Admin from './Pages/Admin';
import UserContextProvider from './Components/UserContext';

function App() {
  return (
    <>
    <div className="App">
    <UserContextProvider>
        <Admin />
      </UserContextProvider>
    </div>
    </>
  );
}

export default App;
