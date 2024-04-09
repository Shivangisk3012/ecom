import {all} from 'redux-saga/effects'
import maincateogarySagas from './MainCateogarySagas'
import subcateogarySagas from './SubCateogarySagas'
import brandSagas from './BrandSagas'
import productSagas from './ProductSagas'

export default function* rootSaga(){
    yield all([
        maincateogarySagas(),
        subcateogarySagas(),
        brandSagas(),
        productSagas()    
    ])
}
