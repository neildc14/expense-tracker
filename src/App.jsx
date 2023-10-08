import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/dashboard";
import Expenses from "./pages/expenses";
import Budgets from "./pages/budgets/Budgets";
import Categories from "./pages/categories/Categories";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
        <Routes>
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
        <Routes>
          <Route path="/budgets" element={<Budgets />} />
        </Routes>
        <Routes>
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
