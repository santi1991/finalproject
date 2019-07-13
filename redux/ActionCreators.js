import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';  


//-------------------------------------------------------------------------------------------------------------

export const fetchProjects = () => (dispatch) => {
    return fetch(baseUrl + 'projects')
        .then(response => { 
            if (response.ok) {
                return response;                
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errMess = new Error(error.message)
            throw errMess;            
        })

        .then(response => response.json())
        .then(projects => dispatch(addProjects(projects)))
        .catch(error => dispatch(projectsFailed(error.message)))
}

//projectsFailed, Which receives the error message as the parameter.
export const projectsFailed = (errmess) => ({
    type: ActionTypes.PROJECTS_FAILED,
    payload: errmess
});

export const addProjects = (projects) => ({
    type: ActionTypes.ADD_PROJECTS,
    payload: projects
});

//-------------------------------------------------------------------------------------------------------------

export const fetchProjectsarea = () => (dispatch) => {
    return fetch(baseUrl + 'projectsarea')
        .then(response => { 
            if (response.ok) {
                return response;                
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errMess = new Error(error.message)
            throw errMess;            
        })

        .then(response => response.json())
        .then(projectsarea => dispatch(addProjectsarea(projectsarea)))
        .catch(error => dispatch(projectsareaFailed(error.message)))
}

export const projectsareaFailed = (errmess) => ({
    type: ActionTypes.PROJECTSAREA_FAILED,
    payload: errmess
});

export const addProjectsarea = (projectsarea) => ({
    type: ActionTypes.ADD_PROJECTSAREA,
    payload: projectsarea
});

//-------------------------------------------------------------------------------------------------------------

export const fetchFounders = () => (dispatch) => { 
    return fetch(baseUrl + 'founders')
        .then(response => { 
            if (response.ok) {
                return response;                
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errMess = new Error(error.message)  
            throw errMess;            
        })

        .then(response => response.json())
        .then(founders => dispatch(addFounders(founders)))
        .catch(error => dispatch(foundersFailed(error.message)))
}

export const foundersFailed = (errmess) => ({
    type: ActionTypes.FOUNDERS_FAILED,
    payload: errmess
});

export const addFounders = (founders) => ({
    type: ActionTypes.ADD_FOUNDERS,
    payload: founders
});

//-------------------------------------------------------------------------------------------------------------

export const fetchStudio = () => (dispatch) => {
    return fetch(baseUrl + 'studio')
        .then(response => { 
            if (response.ok) {
                return response;                
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errMess = new Error(error.message)
            throw errMess;            
        })

        .then(response => response.json())
        .then(studio => dispatch(addStudio(studio)))
        .catch(error => dispatch(studioFailed(error.message)))
}

export const studioFailed = (errmess) => ({
    type: ActionTypes.STUDIO_FAILED,
    payload: errmess
});

export const addStudio = (studio) => ({
    type: ActionTypes.ADD_STUDIO,
    payload: studio
});

//-------------------------------------------------------------------------------------------------------------
