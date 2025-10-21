import { useState } from "react"

export default function CodingList() {
  let [categoryData, setCategoryData] = useState(["매장안내", "상품상세", "타미힐피거"])
  let [categoryActive, setCategoryActive] = useState(0)
  return (
    <section className="middle-wrap">
      <div className="middle-templete">
        <div className="middle-left-cols">
          <div className="middle-left-item">
            <div className="left-block">
              <ul className="middle-menu-list">
                {categoryData.map((item, idx) => {
                  return (
                    <li>
                      <a
                        href="javascript:;"
                        className={["middle-menu", categoryActive === idx ? "active" : ""].filter(Boolean).join(" ")}
                        onClick={() => {
                          setCategoryActive(idx)
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  )
                })}
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
  )
}
