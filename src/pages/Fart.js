import React, { useState, useEffect, useCallback } from 'react';
import fartSound from "../assets/fart-meme-sound2.mp3";
import fartImg from '../assets/fart.jpeg'
import prettyGood from '../assets/prettygood.png'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useSpeechToText from 'react-hook-speech-to-text';
import '../App.css';

var fartStyle = {
    backgroundColor: '#61dafb',
    height: '100vh',
  }

  function farting(fart){
    // new Audio(fartSound).play()
    if (fart != ""){
        new Audio(fartSound).play()
    }
  }

  function startListen(){
    console.log("start listening");
    SpeechRecognition.startListening();
  }

  function stopListen(){
    SpeechRecognition.stopListening();
    console.log("stop listening");
  }

// versi 1
const Fart = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();

      // const farting = useCallback(() => {
      //   console.log(`transcript: ${transcript}`);
      // }, [transcript])

    useEffect(() => {
        // SpeechRecognition.startListening();
        console.log(`transcript: ${transcript}`);
        farting(`${transcript}`);
    }, [transcript]); // untuk melakukan sesuatu onchange transcript

      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }

      return(
        <div style={fartStyle} className="kikyScreen">
        <h1>Your Opinion:</h1>
        <img src={listening ? fartImg : prettyGood} alt="farting" width="300" height="300"/>
        {/* <button onClick={SpeechRecognition.startListening}>Start</button> */}
        <div className='button-row'>
        <button className={listening ? "circle-button-off" : "circle-button-on"} onClick={!listening ? startListen : stopListen}>{!listening ? "initiate fart" : "stop farting"}</button>
        </div>
        {/* <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <p>{transcript}</p> */}
        </div>
    )
}

// versi 2
// const Fart = () => {
//   const {
//     error,
//     interimResult,
//     isRecording,
//     results,
//     startSpeechToText,
//     stopSpeechToText,
//   } = useSpeechToText({
//     continuous: true,
//     useLegacyResults: false
//   });

//     // useEffect(() => {
//     //     SpeechRecognition.startListening();
//     //     console.log(`transcript: ${transcript}`);
//     //     farting(`${transcript}`);
//     // });

//     if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

//     return (
//       <div>
//         <h1>Recording: {isRecording.toString()}</h1>
//         <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
//           {isRecording ? 'Stop Recording' : 'Start Recording'}
//         </button>
//         <ul>
//           {results.map((result) => (
//             <li key={result.timestamp}>{result.transcript}</li>
//           ))}
//           {interimResult && <li>{interimResult}</li>}
//         </ul>
//       </div>
//     );
// }

export default Fart