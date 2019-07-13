import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { projects } from './projects'; 
import { projectsarea } from './projectsarea';
import { founders } from './founders';
import { studio } from './studio';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from  'redux-persist/es/storage';


export const ConfigureStore = () => {

    const config = {
        key: 'root',
        storage,
        debug: true // we will set the debug to true so that the debug information is also corrected.  
    };
 
    const store = createStore(
        persistCombineReducers( config, { 
            projects,
            projectsarea,
            founders,        
            studio
        }),

        applyMiddleware(thunk, logger)

    );

    const persistor = persistStore(store);     

    return {persistor, store}; 
    
}
