import Layout from "./layout/layout"
import Home from "./pages/home/Home"
import Donation from "./pages/donation/Donation"
import AboutUs from "./pages/aboutUs/AboutUs"
import Profile from "./pages/profile/Profile"
import { Routes , Route} from "react-router-dom"

function App() {


  return (
    <>
      <Routes>
        <Route path="/"  element={<Layout />} >

          <Route path="/" element={<Home />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/aboutus" element={<AboutUs />} />

          <Route path="/profile" element={<Profile />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
