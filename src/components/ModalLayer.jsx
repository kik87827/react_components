import { useState } from "react"
import styles from "./ModalLayer.module.scss"

export default function ModalLayer({ isOpen, roleType, message = "메시지를 입력해주세요", callback, onClose }) {
  if (!isOpen) {
    return null
  }
  return (
    <>
      {
        <div className={styles.modalLayer}>
          <div className={styles.modalTable}>
            <div className={styles.modalTd}>
              <div className={styles.modalBox}>
                <div className={styles.modalMessageWrap}>
                  <p className={styles.modalMessage}>{message}</p>
                </div>
                <div className={styles.modalControlWrap}>
                  <a
                    href="#"
                    className={`${styles.btnModalControl} ${styles.theme_2}`}
                    onClick={(e) => {
                      e.preventDefault()
                      if (onClose) onClose()
                      if (callback) callback()
                    }}
                  >
                    <span>확인</span>
                  </a>
                  {roleType === "confirm" && (
                    <a
                      href="#"
                      className={styles.btnModalControl}
                      onClick={(e) => {
                        e.preventDefault()
                        if (onClose) onClose()
                      }}
                    >
                      <span>취소</span>
                    </a>
                  )}
                </div>
                <a
                  href="#"
                  className={styles.btnModalClose}
                  onClick={(e) => {
                    e.preventDefault()
                    if (onClose) onClose()
                  }}
                ></a>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
