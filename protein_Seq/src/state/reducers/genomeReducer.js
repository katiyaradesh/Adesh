import initialState from '../../config/initialState';
import * as ActionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

const GenomeReducer = (state = initialState.Genome, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_TRANSCRIPT:
            state = update(state, { $push: [action.payload] });
            break;
        default:
            return state;
    }
    return state;
}

export default GenomeReducer;