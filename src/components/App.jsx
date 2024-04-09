import React from 'react'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import Home from './Home'
import About from './Validation/About'
import Error from './Error'
import Contact from './Contact'
import AdminHome from './Admin/Home/AdminHome'
import MainCateogary from './Admin/MainCateogary/MainCateogary'
import CreateMainCateogary from './Admin/MainCateogary/CreateMainCateogary'
import UpdateMainCateogary from './Admin/MainCateogary/UpdateMainCateogary'
import CreateSubCateogary from './Admin/SubCateogary/CreateSubCateogary'
import UpdateSubCateogary from './Admin/SubCateogary/UpdateSubCateogary'
import SubCateogary from './Admin/SubCateogary/SubCateogary'

const App = () => {
  return (

    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/maincateogary" element={<MainCateogary />} />     
           <Route path="/admin/maincateogary/create" element={<CreateMainCateogary />} />
           <Route path="/admin/maincateogary/update/:id" element={<UpdateMainCateogary />} />

           <Route path="/admin/subcateogary" element={<SubCateogary />} />     
           <Route path="/admin/subcateogary/create" element={<CreateSubCateogary />} />
           <Route path="/admin/subcateogary/update/:id" element={<UpdateSubCateogary />} />



        <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
    </BrowserRouter>

  )
}

export default App