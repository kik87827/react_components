import React, { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"

function ComboBox({ options = [], onSelect }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const boxRef = useRef(null)
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 })

  // 클릭 시 위치 계산
  const openOptions = () => {
    const rect = boxRef.current.getBoundingClientRect()
    setPos({ top: rect.bottom + window.scrollY, left: rect.left, width: rect.width })
    setIsOpen(true)
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
      <div ref={boxRef} className="border rounded px-3 py-2 cursor-pointer bg-white" onClick={openOptions}>
        {selected ? selected.label : "선택하세요"}
      </div>

      {isOpen &&
        createPortal(
          <div
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              width: pos.width,
              background: "white",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              zIndex: 9999,
            }}
          >
            {options.map((opt) => (
              <div key={opt.value} className="px-3 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelect(opt)}>
                {opt.label}
              </div>
            ))}
          </div>,
          document.body
        )}
    </>
  )
}
