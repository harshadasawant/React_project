import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { actionCreators } from '../state/index';
import {depositMoney,withdrawMoney } from '../state/action-creators/moneyaction'
 export const Shop = () => {
     const dispatch = useDispatch();
    //  const actions = bindActionCreators(actionCreators, dispatch);

    return (
        <div>

            Deposit/Withdraw money
            <button className='btn btn-primary mx-3' onClick={()=>{dispatch(withdrawMoney(100))}}>-</button>
            Update Balance
            <button className='btn btn-primary mx-3' onClick={()=>{dispatch(depositMoney(200))}}>+</button>

            {/* Deposit/Withdraw money
            <button className='btn btn-primary mx-3' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
            Update Balance
            <button className='btn btn-primary mx-3' onClick={()=>{dispatch(actionCreators.depositMoney(200))}}>+</button> */}
        </div>
    )
}

