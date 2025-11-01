import { useState } from "react"
import styles from "./ToggleList.module.scss"

export default function ToggleList({ datas }) {
  const [activeArray, setActiveArray] = useState(() => new Array(datas.length).fill(false))

  return (
    <div className={styles.toggleList}>
      {datas.map((item, index) => {
        return (
          <div className={styles.toggleItem} key={item.id}>
            <a
              href="#"
              className={[styles.toggleHandle, activeArray[index] && styles.toggleHandleActive].filter(Boolean).join(" ")}
              onClick={(e) => {
                e.preventDefault()
                let copyActiveArray = [...activeArray]
                /* copyActiveArray[index] = !copyActiveArray[index] */
                setActiveArray((prev) => prev.map((prevBoolean, previndex) => (previndex === index ? !prevBoolean : false)))
              }}
            >
              {item.title}
            </a>
            <div className={styles.toggleContents} style={{ display: activeArray[index] ? "block" : "none" }}>
              {item.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}
