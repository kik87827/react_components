import { Route, Routes, useLocation, useParams } from "react-router-dom"
import "./App.css"
import CodingList from "./pages/CodingList/CodingList"
import PlayGround from "./pages/PlayGround/PlayGround"

function App() {
  const location = useLocation()
  const titleText = location.pathname === "/" ? "코딩리스트" : "컨포넌트"
  console.log()
  return (
    <div className="App">
      <header className="header-wrap">
        <div className="header-inner">
          <h1 className="toplogo">
            <a href="#" className="toplogo-link">
              <span className="toplogo-node">React</span>
              <span className="toplogo-text">{titleText}</span>
            </a>
          </h1>
          <div className="header-main-cols">
            <nav className="nav-wrap">
              <ul className="nav-list">
                <li>
                  <a href="/" className="nav-item">
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
