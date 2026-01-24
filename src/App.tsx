import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Lesson from "./routes/Lesson";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lesson/:id" element={<Lesson />} />
    </Routes>
  );
}
