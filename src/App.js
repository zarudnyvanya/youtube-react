import { Routes, Route } from 'react-router-dom'

import { Main } from './Pages/Main/Main'
import { Registration } from './Pages/Registration/Registration'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  )
}

export default App
