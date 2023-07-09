import React from "react";
import Navigation from './Navigation';
import { Switch, Route } from 'react-router-dom';
import Statistics from "./Statistics";
import PaymentStatus from './PaymentStatus';
import ProductInfo from './ProductInfo';
import ClerkInfo from './ClerkInfo';
import QueryItems from './QueryItems';
import ClerkAdd from "./ClerkAdd";
import ClerkEdit from "./ClerkEdit";
import ClerkDisplay from "./ClerkDisplay";
import AddProduct from "./AddProduct";
import ViewProduct from "./ViewProduct";
import ItemCollection from "./ItemCollection";
import Paid from './Paid';
import Report from './Report';
import Chart from "./Chart";
// import UserContextProvider from "../Context/UserContext";
// import { Modal } from "./Modal";


function AdminLayout(){
    return(
        <>

    <div className="page-container">
    <div className="first-upper-container">

    </div>


        <div className="header-container">
            {/* <span className="title">Localshop</span> */}
            <div className="page-title">
                <br></br>
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6OoATv8vwg8xzwp5nRRSJzTyWc2JO0A2C0A&usqp=CAU"
                alt="Not found"
                width="100"
                height="80"
                className="logo-title" />
            <div className="welcome">
            <span className="welcome-message">Welcome back, admin</span>
            </div>

            </div>

        </div>
        <div className="second-upper-container">

        </div>

    <div className="bodycontainer">
        <div className="navigation-container">
        <Navigation />
        <div className="routes">
        <Switch>
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


            </Switch>
            {/* <UserContextProvider>
                <Modal />
            </UserContextProvider> */}
        </div>
        </div>
    </div>

    </div>

   </>
    )

}

export default AdminLayout
