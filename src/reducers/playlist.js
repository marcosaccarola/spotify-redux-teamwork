import { initialState } from "../store";

const playlistReducer=(state=initialState.playlist,action)=>{
    switch (action.type) {
        case 'ADD_SONG_TO_PLAYLIST':{
            return{
                //...state,
                tracks:[...state.tracks,action.payload]
            }
        }
        case 'REMOVE_SONG_FROM_PLAYLIST':{
            return{
                //...state,
                tracks:state.tracks.filter((track,i)=>i!==action.payload)
            }
        }
    
        default:
            return state
    }
}

export default playlistReducer