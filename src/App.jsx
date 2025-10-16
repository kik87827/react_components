import "./App.css"

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
      <section className="middle-wrap">
        <div className="middle-templete">
          <div className="middle-left-cols">
            <div className="middle-left-item">
              <div className="left-block">
                <ul className="middle-menu-list">
                  <li>
                    <a href="javascript:;" className="middle-menu active">
                      매장안내
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" className="middle-menu">
                      상품상세
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;" className="middle-menu">
                      타미힐피거
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="middle-right-cols">
            <div className="middle-right-content">
              <div className="vertical-cont-item-wrap">
                <div className="vertical-cont-item">
                  <div className="vertical-cont-title-wrap">
                    <p className="vertical-cont-title">매장안내</p>
                  </div>
                  <div className="vertical-cont-content">
                    <div className="codinglist-tb-wrap">
                      <table className="codinglist-tb">
                        <thead>
                          <tr>
                            <th className="num" style={{ width: "20px" }}>
                              no.
                            </th>
                            <th className="depth">화면 내용</th>
                            <th className="depth" style={{ width: "180px" }}>
                              화면 ID
                            </th>
                            <th className="screen-id" style={{ width: "180px" }}>
                              화면명
                            </th>
                            <th className="work" style={{ width: "70px" }}>
                              현황
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="num">1</td>
                            <td className="depth txtleft">
                              <a href="#" target="_blank" className="screen-link">
                                (공통) &gt; 푸터
                              </a>
                            </td>
                            <td className="screen-id">
                              <a href="#" target="_blank" className="screen-link">
                                미정
                              </a>
                            </td>
                            <td className="screen-id">
                              <a href="#" target="_blank" className="screen-link">
                                Footer
                              </a>
                            </td>
                            <td className="work end">완료</td>
                          </tr>
                          <tr>
                            <td className="num">1</td>
                            <td className="depth txtleft">
                              <a href="#" target="_blank" className="screen-link">
                                (공통) &gt; 푸터
                              </a>
                            </td>
                            <td className="screen-id">
                              <a href="#" target="_blank" className="screen-link">
                                미정
                              </a>
                            </td>
                            <td className="screen-id">
                              <a href="#" target="_blank" className="screen-link">
                                Footer
                              </a>
                            </td>
                            <td className="work ing">진행중</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
