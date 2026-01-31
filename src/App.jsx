import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Layout from "./layouts/Layout";
import Hero from "./components/Hero";
import QuickAccess from "./components/QuickAccess";
import Cards from "./components/Cards";
import StatsAndGallery from "./components/EcosystemStats";
import StaffFaunaSection from "./components/Staff";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Hero />
      <QuickAccess />
      <Cards />
      <StatsAndGallery />
      <StaffFaunaSection />
    </Layout>
  );
}

export default App;
