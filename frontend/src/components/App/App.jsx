import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ProtectedRoute from "../hoc/ProtectedRoute";
import { authCheckAction } from "../../services/actions/actions";
import Preloader from "../Preloader/Preloader";
import Profile from "../Profile/Profile";
import Navigation from "../Navigation/Navigation";

function App() {
  const { isLoading } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(authCheckAction());
  }, []);

  return (
    <div className="App">
      <div className="page">
        <Navigation />
        {
          !isLoading ? (
            <Routes>
              <Route path="/signin" element={<Login />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/" element={
                <ProtectedRoute>
                  <Movies />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } />
            </Routes>
          ) : <Preloader />
        }
      </div>
    </div>
  );
}

export default App;
