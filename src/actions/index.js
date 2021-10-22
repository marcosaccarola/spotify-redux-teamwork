export const currentSong=(song)=>({
    type:'PLAY_CURRENT_SONG',
    payload:song
})
export const addSongToPlaylist=(song)=>({
    type:'ADD_SONG_TO_PLAYLIST',
    payload:song
})
export const removeSongFromPlaylist=(index)=>({
    type:'REMOVE_SONG_FROM_PLAYLIST',
    payload:index
})


// ADD_SONG_TO_PLAYLIST
// REMOVE_SONG_FROM_PLAYLIST
// PLAY_CURRENT_SONG'