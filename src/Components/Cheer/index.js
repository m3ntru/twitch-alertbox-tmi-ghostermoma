import React, { Component } from 'react';
import parse from 'html-react-parser';
import ReactPlayer from 'react-player'
import './Cheer.css';

class Cheer extends Component {

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.time !== this.props.time) { 
            this.player.seekTo(parseFloat(0))
        }       
    }

    ref = player => {
        this.player = player
    }

    render() {
        const { username, bits, message, time } = this.props;
        return (
            <div id="widget" className="widget-AlertBox" data-layout="banner">
                {/* main alert box window */}
                <div id="alert-box">
                {/* particles */}
                <div id="particles" className="hidden" />
                {/* wrap window */}
                <div id="wrap">
                    {/* alert image */}
                    <div id="alert-image-wrap" className="animated">
                    <div id="alert-image" style={{backgroundImage: 'none'}}><ReactPlayer ref={this.ref} playing url="https://s3.us-east-2.amazonaws.com/streamlabs-designers/lavender/1545108947purple.webm" /></div>
                    </div>
                    {/* main alert box window */}
                    <div id="alert-text-wrap">
                    {/* alert text */}
                    <div id="alert-text">
                        {/* alert message */}
                        <div id="alert-message" style={{fontSize: '32px', color: 'rgb(255, 255, 255)', fontFamily: 'Nunito', fontWeight: 600}}>
                        <span data-token="name" style={{color: 'rgb(210, 66, 166)', position: 'relative'}}>{username + ' '}</span>
                        cheered! x
                        <span data-token="name" style={{color: 'rgb(210, 66, 166)', position: 'relative'}}>{bits}</span>
                        </div>
                        <div id="alert-user-message" style={{fontWeight: 400, fontSize: '24px', color: 'rgb(255, 255, 255)', fontFamily: '"Open Sans"'}}> {parse(message)}</div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}

export default Cheer;