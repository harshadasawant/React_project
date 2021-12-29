import {combineReducers} from 'redux';
import amountreducer from './amountreducer';

const combReducers = combineReducers({
    amount : amountreducer
})

export default combReducers;