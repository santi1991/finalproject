import * as ActionTypes from './ActionTypes'; 

//reducer
export const projectsarea = (state = {
        isLoading: true,
        errMess: null,
        projectsarea: []
    }, action) => {

        switch(action.type) {
            case ActionTypes.ADD_PROJECTSAREA:
                return {...state, isLoading: false, errMess: null, projectsarea: action.payload};
            
            case ActionTypes.PROJECTSAREA_LOADING:
                return {...state, isLoading: true, errMess: null, projectsarea: []}; 
            
            case ActionTypes.PROJECTSAREA_FAILED:
                return {...state, isLoading: false, errMess: action.payload, projectsarea: []};    

            default:
                return state;    
        }            
    }