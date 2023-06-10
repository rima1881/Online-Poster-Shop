import Layout from "./layout/layout"
import Home from "./pages/home/Home"
import Donation from "./pages/donation/Donation"
import Cart from "./pages/user/cart/Cart"
import Profile from "./pages/user/profile/Profile"
import AboutUs from "./pages/aboutUs/AboutUs"
import Artist from "./pages/artist/Artist"
import RequireAuth from './components/RequireAuth';
import { Routes , Route} from "react-router-dom"

function App() {

  const ROLES = {
    'User': 2001,
    'illustrator': 1984,
    'Admin': 5150
  }


  return (
    <>
      <Routes>
        <Route path="/"  element={<Layout />} >

          {/*general paths*/}
          <Route path="/" element={<Home />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/aboutus" element={<AboutUs />} />

          {/*user paths*/}
          <Route element={<RequireAuth allowedRoles={[ROLES.User]}/>}>  
            <Route path="/profile" element={<Profile />} />
          </Route>


          {/*illustrator paths */}

          
          {/* catch all */}
          <Route path="*" element={<Home />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
