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
import TravelBook from "./Components/Travelling/Travel/TravelBook";
import SinglePost from "./Components/ExplorePosts/SinglePost/SinglePost";
import Footer from "./Components/Footer/Footer";
import PrivateRoutes from "./pages/PrivateRoutes/PrivateRoutes";
import Dashboard from "./pages/Dashboard/Dashboard";
import Booking from "./pages/Booking/Booking";
import AllUsers from "./pages/AllUsers/AllUsers";
import Settings from "./pages/AdminRoute/AdminRoute";
import BookingReview from "./pages/BookingReview/BookingReview";
import NotFound from "./pages/NotFound/NotFound";
import AddAdmin from "./pages/AddAdmin/AddAdmin";
import AdminRoute from "./pages/AdminRoute/AdminRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/explore/:postId" element={<SinglePost />} />
            <Route path="/experience/:listId" element={<TravelBook />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route
                path="dashboard"
                element={
                  <h1 style={{ textAlign: "center" }}>Welcome To Dashboard</h1>
                }
              />
              <Route path="booking" element={<Booking />} />
            </Route>
            <Route element={<AdminRoute />}>
              <Route path="booking-review" element={<BookingReview />} />
              <Route path="users" element={<AllUsers />} />
              <Route path="add-admin" element={<AddAdmin />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
