import { Outlet } from 'react-router';

import TheHeader from './components/library/TheHeader';

export const MAX_WIDTH = 1450;

function App() {
  return (
    <div className="App w-full h-full min-h-screen flex flex-col bg-background">
      {/* header */}
      <TheHeader />
      {/* router */}
      <Outlet />
    </div>
  )
}

export default App
