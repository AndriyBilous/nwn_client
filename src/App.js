import { Layout } from "./components/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./locations/MainPage";
import { CreaturesPage } from "./locations/CreaturesPage";
import { LocationsPage } from "./locations/LocationsPage";
import { LocationPage } from "./locations/LocationPage";
import { CreaturePage } from "./locations/CreaturePage.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="locations" element={<LocationsPage />} />
        <Route path="location/:id" element={<LocationPage />} />
        <Route path="creatures" element={<CreaturesPage />} />
        <Route path="creature/:id" element={<CreaturePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
