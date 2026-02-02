import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import Hero from "./components/Hero";
import QuickAccess from "./components/QuickAccess";
import Cards from "./components/Cards";
import StatsAndGallery from "./components/EcosystemStats";
import StaffFaunaSection from "./components/Staff";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ 
          <Layout>
            <Hero />
            <QuickAccess />
            <Cards />
            <StatsAndGallery />
            <StaffFaunaSection />
          </Layout>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
