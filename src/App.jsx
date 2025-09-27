import { HashRouter, Routes, Route } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import MyTask from "./pages/MyTask";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/newtask" element={<NewTask />} />
          <Route path="/edittask/:id" element={<EditTask />} />
          <Route path="/mytask" element={<MyTask />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
