import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Experience from "./pages/Experience/Experience";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import AuthProvider from "./Context/AuthProvider";
import useFirebase from "./Hooks/useFirebase";
import TravelBook from "./Components/Travelling/Travel/TravelBook";
import SinglePost from "./Components/ExplorePosts/SinglePost/SinglePost";

function App() {
  const { user } = useFirebase();
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:postId" element={<SinglePost />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/:listId" element={<TravelBook />} />
          <Route path="/login" element={<Login />} />

          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
