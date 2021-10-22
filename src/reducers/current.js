import { initialState } from "../store";

const currentReducer=(state=initialState.current,action)=>{
    switch (action.type) {
        case 'PLAY_CURRENT_SONG':{
            return{
                ...state,
                song:action.payload
            }
        }
        default:
            return state
    }
}

export default currentReducer