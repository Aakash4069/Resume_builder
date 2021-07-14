import React from 'react'
import Home from "./cartComponets/Home"
import Cart from "./cartComponets/Cart"
import NavBar from "./cartComponets/NavBar"
import ProductPage from "./cartComponets/ProductPage"

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

function Ecommerce() {
    return (
        <Router>
            <NavBar></NavBar>
            <Switch>
                {/* <Route path="/home/profile" exact component={Profile}></Route> */}
                <Route path="/home" exact component={Home}></Route>
                <Route path="/cart" exact component={Cart}></Route>
                <Route path="/product" exact component={ProductPage}></Route>
                <Redirect path="/" to="/home"  ></Redirect>
                <Route component={Error}></Route>
            </Switch>
        </Router>
    )
}

export default Ecommerce
