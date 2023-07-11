//import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import AdminLayout from './Components/AdminLayout';
import SignUp from './Pages/SignUp';
import Statistics from "./Components/Statistics";
import PaymentStatus from './Components/PaymentStatus';
import ProductInfo from './Components/ProductInfo';
import ClerkInfo from './Components/ClerkInfo';
import QueryItems from './Components/QueryItems';
import ClerkAdd from "./Components/ClerkAdd";
import ClerkEdit from "./Components/ClerkEdit";
import ClerkDisplay from "./Components/ClerkDisplay";
import AddProduct from "./Components/AddProduct";
import ViewProduct from "./Components/ViewProduct";
import ItemCollection from "./Components/ItemCollection";
import Paid from './Components/Paid';
import Report from './Components/Report';
import Chart from "./Components/Chart";
import ChartPrice from "./Components/ChartPrice";






function App() {
  return (
    <>
    <div className="App">
      {/* <h1>Local-Shop</h1> */}
      <Switch>

      {/* <Route exact path='/dashboard'><Dashboard /></Route> */}
      <Route exact path='/login'><Login /></Route>
      <Route exact path='/signup'><SignUp /></Route>
      <Route exact path='/'><SignUp /></Route>
      <Route exact path='/adminlayout'><AdminLayout /></Route>
      <Route exact path='/statistics'><Statistics  /></Route>
      <Route exact path='/paymentstatus'><PaymentStatus /></Route>
      <Route exact path='/productinfo'><ProductInfo /></Route>
      <Route exact path='/clerkinfo'><ClerkInfo /></Route>
      <Route exact path='/queryitems'><QueryItems /></Route>
      <Route exact path='/clerkadd'><ClerkAdd  /></Route>
      <Route exact path='/clerkedit'><ClerkEdit /></Route>
      <Route exact path='/clerkdisplay'><ClerkDisplay /></Route>
      <Route exact path='/viewproducts'><ViewProduct /></Route>
      <Route exact path='/addproducts'><AddProduct /></Route>
      <Route exact path='/itemcollection'><ItemCollection /></Route>
      <Route exact path='/paid'><Paid /></Route>
      <Route exact path='/report'><Report /></Route>
      <Route exact path='/chart'><Chart /></Route>
      <Route exact path='/chartprice'><ChartPrice /></Route>



      {/* <Route exact path='/'><SignUp /></Route> */}
    </Switch>


    </div>


    </>
  );
}

export default App;
