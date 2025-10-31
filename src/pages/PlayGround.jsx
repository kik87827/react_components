import ToggleList from "../components/ToggleList"
import ToggleAccodian from "../components/ToggleAccodian"
import ModalLayer from "../components/ModalLayer"
import { useState } from "react"
import PopupLayer from "../components/PopupLayer"

export default function PlayGround() {
  const [modalControl, setModalControl] = useState(false)
  const [popupControl, setPopupControl] = useState(true)
  const modalOptions = {
    message: "test message",
    roleType: "confirm",
    onClose() {
      setModalControl(false)
    },
    callback() {
      console.log("callback answer")
    },
  }
  const popupOptions = {
    onClose() {
      setPopupControl(false)
    },
    callback() {
      console.log("callback popup answer")
    },
  }
  const toggleData = [
    {
      id: 1,
      title: <p>토글아이템 샘플 1</p>,
      content: <p>토글아이템 컨텐츠 컨텐츠 컨텐츠 컨텐츠 컨텐츠</p>,
    },
    {
      id: 2,
      title: <p>토글아이템 샘플 2</p>,
      content: <p>토글아이템 컨텐츠 컨텐츠 컨텐츠 컨텐츠 컨텐츠2</p>,
    },
    {
      id: 3,
      title: <p>토글아이템 샘플 3</p>,
      content: <p>토글아이템 컨텐츠 컨텐츠 컨텐츠 컨텐츠 컨텐츠3</p>,
    },
  ]
  return (
    <>
      <ToggleList datas={toggleData} />
      <br />
      <br />
      <br />
      <ToggleAccodian datas={toggleData} />
      <br />
      <br />
      <br />
      <ModalLayer isOpen={modalControl} {...modalOptions} />
      <br />
      <br />
      <br />
      <PopupLayer isOpen={popupControl} {...popupOptions} title="팝업제목">
        팝업내용
      </PopupLayer>
    </>
  )
}
