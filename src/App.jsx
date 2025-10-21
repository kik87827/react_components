import { Route, Routes } from "react-router-dom"
import "./App.css"
import CodingList from "./pages/Codinglist"
import PlayGround from "./pages/PlayGround"

function App() {
  return (
    <div className="App">
      <header className="header-wrap">
        <div className="header-inner">
          <h1 className="toplogo">
            <a href="#" className="toplogo-link">
              <span className="toplogo-node">React</span>
              <span className="toplogo-text">컴포넌트</span>
            </a>
          </h1>
          <div className="header-main-cols">
            <nav className="nav-wrap">
              <ul className="nav-list">
                <li>
                  <a href="index.html" className="nav-item">
                    PUBLISING LIST
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<CodingList />} />
        <Route path="/playground" element={<PlayGround />} />
      </Routes>
    </div>
  )
}

export default App
