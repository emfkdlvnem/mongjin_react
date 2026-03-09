import "./App.css";
import { useState } from "react";

// start App()
function App() {
  const [count, setCount] = useState(0);

  return (
    // main 쪽 부모 요소 구조
    <div className="bg-primary-content">
      {/* header */}
      <nav className="flex h-12 items-center  px-5">
        {/* menubar */}
        <ul className="flex items-center gap-3">
          <li className="bg-neutral btn btn-ghost text-xl">
            <a>SLP소개</a>
          </li>

          <li className="bg-neutral btn btn-ghost text-xl">
            <a>커리큘럼</a>
          </li>

          <li className="bg-neutral btn btn-ghost text-xl">
            <a>입학안내</a>
          </li>

          <li className="bg-neutral btn btn-ghost text-xl">
            <a>SLP소식</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
// end App()

export default App;
