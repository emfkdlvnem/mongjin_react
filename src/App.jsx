import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

// page
import Header from "./components/layout/Header/Header.jsx";

// start App()
function App() {
  return (
    <>
      {/* container */}
      <div>
        <Header />

        {/* router */}
        <Routes>
          <Route path="/" element={<div>메인 페이지</div>} />
        </Routes>
      </div>
    </>
  );
}
// end App()

export default App;
