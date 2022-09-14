import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import AddWorkout from './pages/AddWorkout'

//Pages and Compnents
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <div className='pages'>
      <Routes>
      <Route 
      path='/home'
      element={<Home />}
      />
      {/* addworkout */}
        <Route 
      path='/'
      element={<AddWorkout />}
      />
     </Routes>
     </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
