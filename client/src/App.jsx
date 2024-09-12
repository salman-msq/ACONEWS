import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import News from './components/News';
import CountryNews from './components/CountryNews';
import TopHeadlines from './components/TopHeadlines';
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='w-full'>
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="/" element={<News />} />
          <Route path="/top-headlines/:category" element={<TopHeadlines />} />
          <Route path="/country/:iso" element={<CountryNews />} />
        </Routes>
        <Footer />  
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
