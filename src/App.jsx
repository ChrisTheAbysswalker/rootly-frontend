import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layouts/Layout";
import Hero from "./components/Hero";
import QuickAccess from "./components/QuickAccess";
import Cards from "./components/Cards";
import StatsAndGallery from "./components/EcosystemStats";
import StaffFaunaSection from "./components/Staff";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const token = localStorage.getItem("token");
  const userRole = Number(localStorage.getItem("rol"));

  const isAuthenticated = !!token;
  const isAdmin = userRole === 1;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <QuickAccess />
              <Cards />
              <StatsAndGallery />
              <StaffFaunaSection />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          element={<ProtectedRoute canAccess={isAuthenticated && isAdmin} />}
        >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
