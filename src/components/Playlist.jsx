import React from 'react'
import {connect} from 'react-redux'
import { removeSongFromPlaylist, currentSong } from '../actions'
import {IoTrash} from 'react-icons/io5'
import {Button, Col, Container, Row} from 'react-bootstrap'
import "./style/Playlist.css"

const mapStateToProps=(state)=>({
    playlist:state.playlist.tracks,
    currentSong:state.current.song
  })
  
  const mapDispatchToProps=(dispatch)=>({
    removeFromPlaylist:(song)=>(dispatch(removeSongFromPlaylist(song))),
    addCurrentSong:(song)=>(dispatch(currentSong(song)))
  })

const Playlist = ({playlist,removeFromPlaylist, addCurrentSong}) => {
  
    return (
        <div>
          <Row>
            <Col>
           <h2 className="h2Playlist">Favourite Playlist</h2>
           </Col>
           </Row>
            {playlist?(playlist.map((track,i)=>(
                  <Container className="favouriteContainer mx-5" >
  
                  <div className="py-3 trackHoverCon ">
                  <span className="card-title " style={{ color: "white" }} onClick={()=>addCurrentSong(track)}>
                    {track.title}
                  </span>
                
                  <p className="duration" style={{ color: "white" }}>
                    {Math.floor(parseInt(track.duration) / 60)}:
                    {parseInt(track.duration) % 60 < 10
                      ? "0" + (parseInt(track.duration) % 60)
                      : parseInt(track.duration) % 60}
                  </p>
                
                    <IoTrash className="IoTrash" onClick={()=>removeFromPlaylist(i)}/>
                  
                </div>
                </Container>
            ))
            ):(
        ""
            )

            }
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Playlist);
