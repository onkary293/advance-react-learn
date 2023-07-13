import {React,useReducer} from 'react'
const reducer = (state, action) =>
{
    if (action.type === "sell") return {money: state.money + 10}
    if (action.type === "buy") return {money: state.money - 10}
    if (action.type === "cele") return {money: state.money + 500}
    return state;
}



function UseReduce ()
{
    const initialState = {money: 100};
    const [state, dispatch] = useReducer(reducer, initialState);
   
    return <div>
        <h2>Wallet : {state.money}</h2>
        <button onClick={()=>{dispatch({type:"sell"})}}>Sell</button>
        <button onClick={()=>{dispatch({type:"buy"})}}>buy</button>
        <button onClick={()=>{dispatch({type:"cele"})}}>Celebrity</button>
   </div>
  

}

export default UseReduce;