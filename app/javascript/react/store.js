import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import apiReducer from './reducers/apiReducer'
import stateReducer from './reducers/stateReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
    combineReducers({
        api: apiReducer,
        state: stateReducer,
    }),
    composeEnhancers(
        applyMiddleware(thunk)
    )
)