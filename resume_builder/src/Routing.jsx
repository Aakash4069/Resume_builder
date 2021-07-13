import React, { Component } from 'react'
import {Redirect, Route} from "react-router-dom"

export default class Routing extends Component {
    render() {
        return (
            <div>
                Routing Example
                <Switch>
                    <Route path="/home/profile" exact component={Profile}></Route>
                    <Route path="/home" exact component={Home}></Route>
                    <Redirect path="/" to="/home" exact ></Redirect>
                    <Route path="/Card" exact component={Card}></Route>
                    <Route path="/product" exact component={Product}></Route>
                    <Route  component={Error}></Route>
                </Switch>
            </div>
        )
    }
}

class Home extends Componet{
    render(){
        return (
            <div>
                Home
            </div>
        )
    }
}


class Profile extends Componet{
    render(){
        return (
            <div>
                Profile
            </div>
        )
    }
}

class Card extends Componet{
    render(){
        return (
            <div>
                Card
            </div>
        )
    }
}

class Product extends Componet{
    render(){
        return (
            <div>
                Product
            </div>
        )
    }
}