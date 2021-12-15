import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import GenomeReducer from '../state/reducers/genomeReducer';

let rootReducer = combineReducers({
    Genome: GenomeReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));
window.store = store;
export default store;