import { Layout } from "./components/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { CreaturesPage } from "./pages/CreaturesPage";
import { LocationsPage } from "./pages/LocationsPage";
import { LocationPage } from "./pages/LocationPage";
import { CreaturePage } from "./pages/CreaturePage.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="locations" element={<LocationsPage />} />
        <Route path="location/:id" element={<LocationPage />} />
        <Route path="creatures/*" element={<CreaturesPage />} />
        <Route path="creature/:id" element={<CreaturePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
