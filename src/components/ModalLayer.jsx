export default function ModalLayer() {
  return (
    <>
      <div className={styles.modalLayer}>
        <div className={styles.modalTableWrap}>
          <div className={styles.modalTable}>
            <div className={styles.modalTd}>
              <div class="modal-box-container">
                <div class="modal-message-wrap">
                  <p class="modal-message">모달 메시지가 나옵니다.</p>
                </div>
                <div class="modal-control-wrap">
                  <a href="javascript:;" class="btn-modal-control">
                    <span class="text-node">확인</span>
                  </a>
                  <a href="javascript:;" class="btn-modal-control">
                    <span class="text-node">취소</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
