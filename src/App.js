import './App.css';
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {Howl} from 'howler';

let audioRecieved = false;
const json = {
	"results": [
	  {
		"alternatives": [
		  {
			"transcript": "hi I'd like to buy a Chromecast I'm always wondering whether you could help me with that",
			"confidence": 0.8991147,
            "words": [
              {
                "startTime": 140000,
                "endTime": 1800000,
                "word": "okay"
              },
              {
                "startTime": 1800000,
                "endTime": 2300000,
                "word": "so"
			  }
			]
		  }
		],
		"channelTag": 1,
		"languageCode": "en-us"
	  },
	  {
		"alternatives": [
		  {
			"transcript": "certainly which color would you like we have blue black and red",
			"confidence": 0.9408236
		  }
		],
		"channelTag": 2,
		"languageCode": "en-us"
	  }
	]
}

const dialog = (name, sentence) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div>{name} : </div>
      <div>{sentence}</div>
    </div>
  );
}

function MyDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
    audioRecieved = true;
    var sound = new Howl({
      src: [require('./' +(acceptedFiles[0].path))]
    });
        // sound.play();s
    
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
      <div>
        {json.results.map(alternative => 
          dialog(alternative.channelTag, alternative.alternatives[0].transcript)
        )}
      </div>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyDropzone/>

      </header>
    </div>
  );
}

export default App;
