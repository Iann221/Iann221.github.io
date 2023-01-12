import React from 'react';
import fartSound from "../assets/fart-meme-sound.mp3";
import fartImg from '../assets/fart.jpeg'
import { ReactMic } from 'react-mic';
import '../App.css';

var fartStyle = {
    backgroundColor: '#61dafb',
    height: '100vh',
  }

class Mic extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          record: false
        }
      }

      componentDidMount() {
        // call api or anything
        console.log("Component has been rendered bro");
        // this.startRecording()
      }
     
      startRecording = () => {
        console.log("start record");
        this.setState({ record: true });
      }
     
      stopRecording = () => {
        this.setState({ record: false });
      }
     
      onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
      }
     
      onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
      }

    farting(){
        new Audio(fartSound).play()
    }

    render(){
        return(
            <div style={fartStyle} className="kikyScreen">
            <h1>Your Opinion:</h1>
            <img src={fartImg} alt="farting" width="300" height="300"/>
            <button onClick={this.farting}>fart</button>
            <button onClick={this.startRecording} type="button">Start</button>
            <button onClick={this.stopRecording} type="button">Stop</button>   
            <ReactMic
                record={this.state.record}
                // className="sound-wave"
                onStop={this.onStop}
                onData={this.onData}
                // strokeColor="#000000"
                // backgroundColor="#FF4081" 
            />
            </div>
        )
    }
}

export default Mic