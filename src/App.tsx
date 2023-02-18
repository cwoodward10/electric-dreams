import { useState } from 'react';

import TheLandingPage from './components/TheLandingPage';

import { GenerationResponse } from './modules/utility/generator';

function App() {

  /**
     * Array containing {seed, image} objects
     */
  const [generatedImages, setGeneratedImages] = useState(undefined as undefined|GenerationResponse);

  function onImagesGenerated(images: GenerationResponse|undefined) {
    setGeneratedImages(images);
  }

  return (
    <div className="App w-full h-full">
      <TheLandingPage />
    </div>
  )
}

export default App
