import styles from "./PopupLayer.module.scss"

export default function PoppupLayer({ isOpen, title, children, callback, onClose }) {
  if (!isOpen) {
    return null
  }
  return (
    <>
      <div className={styles.popupLayer}>
        <div className={styles.popupItemContainer}>
          {title && (
            <div className={styles.popupItemTitle}>
              <h2 className={styles.popupTitleNode}>{title}</h2>
            </div>
          )}
          <div className={styles.popupItemContents}>{children}</div>
          <button
            className={styles.btnPopupClose}
            onClick={(e) => {
              e.preventDefault()
              if (onClose) {
                onClose()
              }
              if (callback) {
                callback()
              }
            }}
          ></button>
        </div>
      </div>
    </>
  )
}
