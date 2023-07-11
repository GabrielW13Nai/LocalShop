import React from 'react'
import Dashboard from './Dashboard';
import { Switch, Route } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import AddProduct from "./AddProduct";
import ViewProduct from "./ViewProduct";
import ItemCollection from "./ItemCollection";
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

                <Route exact path='/productinfo'><ProductInfo /></Route>
                <Route exact path='/viewproducts'><ViewProduct /></Route>
                <Route exact path='/addproducts'><AddProduct /></Route>
                <Route exact path='/itemcollection'><ItemCollection /></Route>


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
