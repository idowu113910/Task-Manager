import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import MyTask from "./pages/MyTask";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/newtask" element={<NewTask />} />
          <Route path="/edittask" element={<EditTask />} />
          <Route path="/mytask" element={<MyTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
