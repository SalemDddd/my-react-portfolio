import { legacy_createStore as createStore, combineReducers} from 'redux'
import scrollReducer from './reducers/scrollReducer'


const store = createStore(scrollReducer);

export default store;