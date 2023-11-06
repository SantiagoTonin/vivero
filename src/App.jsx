import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Carrito from "./pages/Carrito";
import Login from "./pages/account/Login";
import Signup from "./pages/account/Signup";
import AgregarProducto from "./pages/AgregarProducto";
import VerProductos from "./components/VerProductos/VerProductos";
import "boxicons";
import Logout from "./pages/account/Logout";
import ProfilePage from "./pages/account/ProfilePage";
import { AuthContextProvider } from "./contexts/authContext";
import PrivateRoute from "./components/router/PrivateRoute";
import PublicRoute from "./components/router/PublicRoute";
import {
  CART,
  HOME,
  ADD_PRODUCT,
  PRODUCTS,
  SIGNUP,
  LOGIN,
  LOGOUT,
  PRIVATE,
  PROFILE,
} from "./config/routes/paths.js";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<Home />} />

          <Route path={HOME} element={<PublicRoute />}>
            <Route path={LOGIN} element={<Login />} />
            <Route path={SIGNUP} element={<Signup />} />
          </Route>

          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route path={PROFILE} element={<ProfilePage />} />
            <Route path={PRODUCTS} element={<VerProductos />} />
            <Route path={LOGOUT} element={<Logout />} />
            <Route path={ADD_PRODUCT} element={<AgregarProducto />} />
            <Route path="/private/cart/:id" element={<Carrito />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
