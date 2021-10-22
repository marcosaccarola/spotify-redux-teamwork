import React from 'react'
import {connect} from 'react-redux'
import { removeSongFromPlaylist } from '../actions'
import {IoMdHeartEmpty} from 'react-icons/io'
import {Button} from 'react-bootstrap'

const mapStateToProps=(state)=>({
    playlist:state.playlist.tracks
  })
  
  const mapDispatchToProps=(dispatch)=>({
    removeFromPlaylist:(song)=>(dispatch(removeSongFromPlaylist(song))),
  })

const Playlist = ({playlist,removeFromPlaylist}) => {
    return (
        <div>
            {playlist?(playlist.map((track,i)=>(
                  <div className="py-3 trackHover">
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
                    <IoMdHeartEmpty style={{fontSize:30}} onClick={()=>removeFromPlaylist(i)}/>
                  </Button>
                </div>
            ))
            ):(
                ''
            )

            }
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Playlist)
