import { useState, useEffect } from "react"

export default function CodingList() {
  let [codingData, setCodingData] = useState(null)
  let [categoryActive, setCategoryActive] = useState(-1)

  useEffect(() => {
    fetch("/data/coding_list.json")
      .then((result) => result.json())
      .then((json) => setCodingData(json))
      .catch((error) => console.error("JSON 불러오기 실패 : ", error))
  }, [])
  return (
    <section className="middle-wrap">
      <div className="middle-templete">
        <div className="middle-left-cols">
          <div className="middle-left-item">
            <div className="left-block">
              <ul className="middle-menu-list">
                {codingData &&
                  Object.keys(codingData).map((keyItem, idx) => (
                    <li key={keyItem}>
                      <a
                        href="#"
                        className={`middle-menu ${categoryActive === idx && categoryActive >= 0 ? "active" : ""}`}
                        onClick={(e) => {
                          e.preventDefault()
                          setCategoryActive((prev) => (prev === idx ? -1 : idx))
                        }}
                      >
                        {keyItem}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="middle-right-cols">
          <div className="middle-right-content">
            <div className="vertical-cont-item-wrap">
              {codingData &&
                Object.entries(codingData).map(([key, depArray], idx) => (
                  <div className={`vertical-cont-item ${categoryActive !== idx && categoryActive >= 0 ? "hidden" : ""}`} key={key + idx}>
                    <div className="vertical-cont-title-wrap">
                      <p className="vertical-cont-title">{key}</p>
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
                              <th className="work" style={{ width: "70px" }}>
                                현황
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {depArray.map((item, idx) => (
                              <tr key={idx}>
                                <td className="num">{idx + 1}</td>
                                <td className="depth txtleft">
                                  <a href="#" target="_blank" className="screen-link">
                                    {item.menuName}
                                  </a>
                                </td>
                                <td className={item.current === "완료" ? "work end" : ""}> {item.current}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
