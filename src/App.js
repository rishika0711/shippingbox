import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShippingProvider } from "./context/ShippingContext";
import Navbar from "./components/Navbar/Navbar";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";

const App = () => {
  return (
    <ShippingProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/list" element={<TablePage />} />
        </Routes>
      </Router>
    </ShippingProvider>
  );
};

export default App;