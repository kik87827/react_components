import { useState } from "react"
import styles from "./PopupLayer.module.scss"

export default function PoppupLayer({ title, children, callback, onClose }) {
  return (
    <>
      <div className={styles.popupLayer}>
        <div className={styles.popupItemContainer}>
          <div className={styles.popupItemTitle}>
            <h2 className={styles.popupTitleNode}>{title}</h2>
          </div>
          <div className={styles.popupItemContents}>{children}</div>
          <button className={styles.btnPopupClose} onClick={(e)=>{
            e.preventDefault();
            
          }}></button>
        </div>
      </div>
    </>
  )
}
