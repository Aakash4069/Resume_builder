import React from "react";

import { connect } from "react-redux";

function Ball(props) {
    console.log(props);

    return (
        <div>
            <h1> Number of Balls {props.balls} </h1>
            <button onClick={props.buyball}>
                Buy Balls
            </button>
            <button onClick={props.sellball}>
                Sell Balls
            </button>
        </div>
    );
}

const mapStateToProps = store => {
    console.log("in map state to prop", store);
    return store;
}
const mapDispatchtoProps=dispatch=>{
    return {
        buyball:()=>{
            return dispatch({type:"buy_ball"})
        },
        sellball:()=>{
            return dispatch({type:"sell_ball"})
        }
    }
}
const HigherOrderComponent=connect(mapStateToProps,mapDispatchtoProps)(Ball);
export default HigherOrderComponent;