import {createStore,configureStore, combineReducers} from 'redux'
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

const configureStore=createStore(
    bigReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore