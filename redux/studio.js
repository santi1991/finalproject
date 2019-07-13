import * as ActionTypes from './ActionTypes';

//reducer
export const studio = (state = {
        isLoading: true,
        errMess: null,
        studio: []
    }, action) => {

        switch(action.type) {
            case ActionTypes.ADD_STUDIO:
                return {...state, isLoading: false, errMess: null, studio: action.payload};
            
            case ActionTypes.STUDIO_LOADING:
                return {...state, isLoading: true, errMess: null, studio: []}; 
            
            case ActionTypes.STUDIO_FAILED:
                return {...state, isLoading: false, errMess: action.payload, studio: []};    

            default:
                return state;    
        }            
    }