import { combineReducers } from '@reduxjs/toolkit';
import MainCateogaryReducer from './MainCateogaryReducer';
import SubCateogaryReducer from './SubCateogaryReducer';
import BrandReducer from './BrandReducer';
import ProductReducer from './ProductReducer';
export default combineReducers({
    MaincateogaryStateData: MainCateogaryReducer,
    SubcateogaryStateData: SubCateogaryReducer,
    BrandStateData: BrandReducer,
    ProductStateData: ProductReducer

})