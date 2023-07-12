import React from 'react'
import Dashboard from './Dashboard';
import { Switch, Route } from 'react-router-dom';
import ClerkProductInfo from './ClerkProductInfo';
import ClerkAddProduct from '../Clerk/ClerkAddProduct';
import ClerkViewProduct from '../Clerk/ClerkViewProduct';
import ClerkItemCollection from '../Clerk/ClerkItemCollection';
import Header from "./Header";

const ClerkLayout = () => {
    return(
        <>

    <div className="page-container">

        <Header />
        <div className="second-upper-container">

        </div>

        <div className="bodycontainer">
            <div className="navigation-container">
            <Dashboard />
            <div className="routes">
            <Switch>

                <Route exact path='/clerkproductinfo'><ClerkProductInfo /></Route>
                <Route exact path='/clerkviewproducts'><ClerkViewProduct /></Route>
                <Route exact path='/clerkaddproducts'><ClerkAddProduct /></Route>
                <Route exact path='/clerkitemcollection'><ClerkItemCollection /></Route>

            </Switch>
            {/* <UserContextProvider>
                <ClerkEdit />
            </UserContextProvider> */}
            </div>
        </div>
    </div>

    </div>

   </>
    )

}
export default ClerkLayout
