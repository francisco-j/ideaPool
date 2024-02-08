
// pages
import PoolsListPage from "./pages/PoolsListPage";
import PoolPage from "./pages/PoolPage";
import {useState} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import {useLocation} from 'react-router-dom';
// styles
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  // let location = useLocation();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PoolsListPage />} />
        <Route path="pools/*" element={<PoolPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
