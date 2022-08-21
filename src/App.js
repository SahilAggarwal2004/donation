import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MakeDonations from "./components/User/MakeDonations";
import UserProfile from "./components/User/UserProfile";

const Landing = lazy(() => import("./components/Landing"));
const Navbar = lazy(() => import("./components/User/Navbar"));
const Register = lazy(() => import("./components/Register"));
const Login = lazy(() => import("./components/Login"));
const NavBar = lazy(() => import("./components/Ngo/NavBar"));
const Dashboard = lazy(() => import("./components/Ngo/Dashboard"));
const Profile = lazy(() => import("./components/Ngo/Profile"));
const About = lazy(() => import("./components/About"));
const Posts = lazy(() => import("./components/Ngo/Posts"));
const DashBoardMoreDetails = lazy(() =>
  import("./components/Ngo/DashBoardMoreDetails")
);
function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader dimension={10} />}>
      <ContextProvider>
        {location.pathname.startsWith("/user") && <Navbar />}
        {location.pathname.startsWith("/ngo") && <NavBar />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/signup" element={<Register type="User" />} />
          <Route path="/user/login" element={<Login type="User" />} />
          <Route path="/user/donations" element={<MakeDonations />} />
          <Route path="/ngo/signup" element={<Register type="Ngo" />} />
          <Route path="/ngo/login" element={<Login type="Ngo" />} />
          <Route path="/ngo/dashboard" element={<Dashboard />} />
          <Route path="/ngo/profile" element={<Profile />} />
          <Route path="/ngo" element={<Posts />} />
          <Route path="/ngo/dashmore" element={<DashBoardMoreDetails />} />
          <Route path="/user/profile" element={<UserProfile />} />

          {/* <Route path="/user" element={<Comp />} />
            <Route path="/ngo" element={<Comp />} /> */}
        </Routes>
      </ContextProvider>
      <ToastContainer position="bottom-right" />
    </Suspense>
  );
}

export default App;
