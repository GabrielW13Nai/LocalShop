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


function AdminLayout(){
    return(
        <>

    <div className="page-container">
        <div className="header-container">
            <span className="welcome-message">Welcome back, admin</span>
            <div className="page-title">
                <br></br>
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRei7XXolzHD7EPdOVEC2THV7VgixfGphhR3Q&usqp=CAU"
                alt="Not found"
                width="100"
                height="100"
                className="logo-title" />
            </div>
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

            </Switch>
        </div>
        </div>
    </div>

    </div>

   </>
    )

}

export default AdminLayout
