import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/dashboard/DashBoard";
import Expenses from "./pages/expenses";
import Budgets from "./pages/budgets/Budgets";
import Categories from "./pages/categories/Categories";
import MainPage from "./components/page-container/PageContainer";
import Login from "./pages/auth/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainPage />}>
            <Route path="/dashboard" element={<DashBoard />} />{" "}
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/budgets" element={<Budgets />} />
            <Route path="/categories" element={<Categories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
