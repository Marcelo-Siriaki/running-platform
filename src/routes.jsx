import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import About from './pages/AboutMe'
import Contact from './pages/Contact'

export default function MainRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>

    )

}