import { Layout } from "./components/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { CreaturesPage } from "./pages/CreaturesPage";
import { LocationsPage } from "./pages/LocationsPage";
import { LocationPage } from "./pages/LocationPage";
import { CreaturePage } from "./pages/CreaturePage.jsx";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLocations } from "./redux/features/locationSlice.js";
import { getAllCreatures } from "./redux/features/creatureSlice.js";

function App() {
  const { creatures } = useSelector((state) => state.creature);
  const { locations } = useSelector((state) => state.location);
  const dispatch = useDispatch();

  useEffect(() => {
    if (locations.length === 0) {
      dispatch(getAllLocations());
    }
  }, [dispatch, locations]);

  useEffect(() => {
    if (creatures.length === 0) {
      dispatch(getAllCreatures());
    }
  }, [dispatch, creatures]);

  // console.log(locations, creatures);
  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="locations" element={<LocationsPage />} />
        <Route path="location/:id" element={<LocationPage />} />
        <Route path="creatures/*" element={<CreaturesPage />} />
        <Route path="creature/:id" element={<CreaturePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
