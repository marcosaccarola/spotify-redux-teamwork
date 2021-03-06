import {createStore, combineReducers} from 'redux'
import currentReducer from '../reducers/current'
import playlistReducer from '../reducers/playlist'

export const initialState={
    current:{
        song:null
    },
    playlist:{
        tracks:[]
    }
}

const bigReducer=combineReducers({
    current:currentReducer,
    playlist:playlistReducer
})

export const configureStore = createStore (
    bigReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
)

