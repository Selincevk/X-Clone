
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Protected from './components/protected/protected'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />

<Route element={<Protected/>} />
      <Route path='/feed' element={<Feed/>} />
      <Route path='/profile' element={<h1>Profil</h1>} />
      <Route path='/settings' element={<h1>Ayarlar</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
