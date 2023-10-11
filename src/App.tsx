import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import NewPost from './pages/NewPost'
import EditPost from './pages/EditPost'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='min-h-[100vh] flex flex-col'>
          <Header />
          <div className='font-openSans text-lg bg-greyBg grow flex flex-col justify-center py-12'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/new-post' element={<NewPost />} />
              <Route path='/post/:id' element={<EditPost />} />
            </Routes>
          </div>
          <Footer className='' />
        </div >
      </BrowserRouter>
    </>
  )
}

export default App
