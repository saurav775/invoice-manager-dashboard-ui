import { combineReducers } from 'redux';
import customers from './customers';
import rightDrawer from './rightDrawer';
import snackBar from './snackBar';
import popup from './popup';
import products from './products';
import invoices from './invoices';

const combinedReducers = combineReducers({
    customers,
    rightDrawer,
    snackBar,
    popup,
    products,
    invoices
})

export default combinedReducers;