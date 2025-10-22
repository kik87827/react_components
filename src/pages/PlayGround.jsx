import ToggleList from "../components/ToggleList"

export default function PlayGround() {
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
    </>
  )
}
