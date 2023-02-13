import './App.css'

import { useState } from 'react';

import TheGenerator from './components/TheGenerator';
import { GenerationResponse } from './modules/utility/generator';
import { TheImages } from './components/TheImages';

function App() {

  /**
     * Array containing {seed, image} objects
     */
  const [generatedImages, setGeneratedImages] = useState(undefined as undefined|GenerationResponse);

  function onImagesGenerated(images: GenerationResponse|undefined) {
    setGeneratedImages(images);
  }

  return (
    <div className="App">
      <TheGenerator onImagesGenerated={onImagesGenerated} />
      <TheImages generatedImages={generatedImages} />
    </div>
  )
}

export default App
