import { useState } from 'react';

import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

import TheLandingPage from './components/pages/TheLandingPage';

import { routeConstants } from './main';
import { GenerationResponse } from './modules/utility/generator';

function App() {

  /**
     * Array containing {seed, image} objects
     */
  const [generatedImages, setGeneratedImages] = useState(undefined as undefined|GenerationResponse);

  function onImagesGenerated(images: GenerationResponse|undefined) {
    setGeneratedImages(images);
  }

  const bgImageStyle={
      backgroundImage: `url(https://i.imgur.com/WCOyC7M.png})`,
  }

  function navLinkText(text: string) {
    return (
      <span 
        className={`font-semibold`
      }>
        {text}
      </span>
    )
  }

  return (
    <div className="App w-full h-full min-h-screen flex flex-col">
      {/* bg image */}
      <div 
          className='fixed top-0 left-0 z-0 h-screen w-screen bg-center bg-no-repeat bg-cover'
          style={bgImageStyle}
      />
      {/* header */}
      <div className="md:fixed md:top-0 md:right-0 z-50 flex gap-3 pr-3 pt-3 ml-auto">
        <NavLink to={routeConstants.HOME} 
          className={(({isActive}: any) => isActive ? 'text-accent-red' : 'text-accent-yellow')}
        >
          {navLinkText('Home')}
        </NavLink>
        <NavLink to={routeConstants.GENERATOR} 
          className={(({isActive}: any) => isActive ? 'text-accent-red' : 'text-accent-yellow')}
        >
          {navLinkText('Story Generator')}
        </NavLink>
        <NavLink to={routeConstants.ABOUT} 
          className={(({isActive}: any) => isActive ? 'text-accent-red' : 'text-accent-yellow')}
        >
          {navLinkText('About')}
        </NavLink>
      </div>
      {/* router */}
      <Outlet />
    </div>
  )
}

export default App
