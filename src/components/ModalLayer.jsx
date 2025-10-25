import { useState } from "react"
import styles from "./ModalLayer.module.scss"

export default function ModalLayer() {
  return (
    <>
      <div className={styles.modalLayer}>
        <div className={styles.modalTable}>
          <div className={styles.modalTd}>
            <div className={styles.modalBox}>
              <div className={styles.modalMessageWrap}>
                <p className={styles.modalMessage}>모달 메시지가 나옵니다.</p>
              </div>
              <div className={styles.modalControlWrap}>
                <a href="#" className={styles.btnModalControl}>
                  <span>확인</span>
                </a>
                <a href="#" className={`${styles.btnModalControl} ${styles.theme_2}`}>
                  <span>취소</span>
                </a>
              </div>
              <a href="#" className={styles.btnModalClose}></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
