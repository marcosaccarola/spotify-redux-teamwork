import React from "react";
import {connect} from 'react-redux'
import { addSongToPlaylist, currentSong } from "../actions";
import {FcLike} from "react-icons/fc"
import { Button } from "react-bootstrap";

const mapStateToProps=(state)=>({
  currentSong:state.current.song
})

const mapDispatchToProps=(dispatch)=>({
  addCurrentSong:(song)=>(dispatch(currentSong(song))),
  addToPlaylist:(song)=>(dispatch(addSongToPlaylist(song))),
})

const Song = ({ track,addCurrentSong,addToPlaylist }) => (
  <div className="py-3 trackHover" onClick={()=>addCurrentSong(track)}>
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
    <Button style={{borderRadius: "50%", background: "transparent", border: 'none'}}>
      <FcLike onClick={()=>addToPlaylist(track)}/>
    </Button>
  </div>
);

export default connect(mapStateToProps,mapDispatchToProps)(Song);

