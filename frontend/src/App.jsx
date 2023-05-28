import Layout from "./layout/layout"
import Home from "./pages/home/Home"
import Donation from "./pages/donation/Donation"
import AboutUs from "./pages/aboutUs/AboutUs"
import Profile from "./pages/profile/Profile"
import Artist from "./pages/artist/Artist"
import { Routes , Route} from "react-router-dom"

function App() {


  return (
    <>
      <Routes>
        <Route path="/"  element={<Layout />} >

          {/*general paths*/}
          <Route path="/" element={<Home />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/aboutus" element={<AboutUs />} />

          {/*user paths*/}
          <Route path="/profile" element={<Profile />} />

          {/*artist paths*/}
          <Route path="/Artist" element={<Artist />} /> 

        </Route>
      </Routes>
    </>
  )
}

export default App
