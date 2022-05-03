import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './video.css'

// Render a YouTube video player



export default class Video extends Component {
  render() {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/embed/xpwm75uZQBs'
            width='80%'
            height='112%'
            controls={true}
            light={true}
            playIcon={<button><i class="fab fa-youtube fa-4x" style={{"color":"red"}}></i></button>}
            />
        </div>
    )
  }
}
