import { useEffect, useState, useRef } from "react"
import { createPortal } from "react-dom"
import styles from "./ComboBox.module.scss"

export default function ComboBox({ options = [], onSelect }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const boxRef = useRef(null)
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 })

  // 클릭 시 위치 계산
  const openOptions = () => {
    const rect = boxRef.current.getBoundingClientRect()
    setPos({
      top: rect.bottom + window.scrollY,
      left: rect.left,
      width: rect.width,
    })
    setIsOpen((prev) => !prev)
  }

  // 외부 클릭 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // 선택 시
  const handleSelect = (opt) => {
    setSelected(opt)
    onSelect?.(opt)
    setIsOpen(false)
  }
  return (
    <>
      <button className={styles.comboBoxTarget} ref={boxRef} onClick={openOptions}>
        <span className={styles.textNode}>{selected ? selected.label : "선택하세요"}</span>
      </button>

      {isOpen &&
        createPortal(
          <>
            <div
              className={styles.optionLayer}
              style={{
                top: pos.top,
                left: pos.left,
                width: pos.width,
              }}
            >
              <ul className={styles.optionList}>
                {options.map((opt) => (
                  <li key={opt.value}>
                    <button className={styles.optionItem} onClick={() => handleSelect(opt)}>
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </>,
          document.body
        )}
    </>
  )
}
