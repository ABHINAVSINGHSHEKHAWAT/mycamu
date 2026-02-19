import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Cafeteria from "./pages/Cafeteria";
import MyInstitution from "./pages/MyInstitution";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Cafeteria />} />
        <Route path="cafeteria" element={<Cafeteria />} />
        <Route path="my-institution" element={<MyInstitution />} />
      </Route>
    </Routes>
  );
}

export default App;
