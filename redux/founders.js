import * as ActionTypes from './ActionTypes';

//reducer
export const founders = (state = {
        isLoading: true,
        errMess: null,
        founders: [] 
    }, action) => {

        switch(action.type) {
            case ActionTypes.ADD_FOUNDERS:
                return {...state, isLoading: false, errMess: null, founders: action.payload};
            
            case ActionTypes.FOUNDERS_LOADING:
                return {...state, isLoading: true, errMess: null, founders: []}; 
            
            case ActionTypes.FOUNDERS_FAILED:
                return {...state, isLoading: false, errMess: action.payload, founders: []};    

            default:
                return state;    
        }            
    }