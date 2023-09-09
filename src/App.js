import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Exprience from "./pages/Exprience/Exprience";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import AuthProvider from "./Context/AuthProvider";
import useFirebase from "./Hooks/useFirebase";

function App() {
  const { user } = useFirebase();
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/exprience" element={<Exprience />} />

          <Route path="/login" element={<Login />} />

          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
