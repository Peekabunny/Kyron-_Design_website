/* handle routing */

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage.tsx";
import ContactPage from "./pages/contact_page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default App;
