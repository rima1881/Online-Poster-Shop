import { Routes , Route} from "react-router-dom"
import Cookies from "js-cookie";
import RequireAuth from './components/RequireAuth';
import CheckToken from "./components/CheckToken"
import Layout from "./layout/layout"
import Home from "./pages/home/Home"
import Drawing from "./pages/drawing/Drawing"
import Account from "./pages/account/Account";
import Donation from "./pages/donation/Donation"
import AboutUs from "./pages/aboutUs/AboutUs"
import Artist from "./pages/artist/Artist"

function App() {

  const ROLES = {
    'User': 2001,
    'illustrator': 1984,
    'Admin': 5150
  }

  Cookies.set("auth",{email : "", role : "" , accessToken : ""})


  return (
    <>
      <Routes>
        <Route element={<CheckToken />} >
          <Route path="/"  element={<Layout />} >

            {/*general paths*/}
            <Route path="/" element={<Home />} />
            <Route path="/drawing/:id" element={<Drawing />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/aboutus" element={<AboutUs />} />

            {/*user paths*/}
            {/*<Route element={<RequireAuth allowedRoles={[ROLES.User]}/>}>  */}
              <Route path="/account" element={<Account />} />
            {/*</Route>*/}


            {/*illustrator paths */}
            <Route path="/illustrator" element={<Artist />} />
          
            {/* catch all */}
            <Route path="*" element={<Home />} />

          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
