import React from "react";
import Navigation from './Navigation';
import { Switch, Route } from 'react-router-dom';
import Statistics from "./Statistics";
import PaymentStatus from './PaymentStatus';
import ProductInfo from './ProductInfo';
import ClerkInfo from './ClerkInfo';
import QueryItems from './QueryItems';

function AdminLayout(){
    return(
        <>

    <div className="page-container">
        <div className="header-container">
            <div className="page-title">
                <br></br>
            <span className="welcome-message">Welcome back, admin</span>
            </div>

        <div className="navigation-container">
        <Navigation />
        <div className="routes">
        <Switch>
                <Route exact path='/statistics'><Statistics /></Route>
                <Route exact path='/paymentstatus'><PaymentStatus /></Route>
                <Route exact path='/productinfo'><ProductInfo /></Route>
                <Route exact path='/clerkinfo'><ClerkInfo /></Route>
                <Route exact path='/queryitems'><QueryItems /></Route>
            </Switch>
        </div>
        </div>
        </div>
        <div className="body-container">
            <div className="col-1 container">

            </div>
            <div className="col-2 container">

            </div>
            <div className="col-3 container">

            </div>
        </div>
    </div>

   </>
    )

}

export default AdminLayout
