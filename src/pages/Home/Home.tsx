import { useEffect, useState } from "react"

import { data } from "./mockData"

const Home: React.FC = () => {
  const [selection, setSelection] = useState("books and authors worth reading")
  const [bingoData, setBingoData] = useState<string[]>([])

  useEffect(() => {
    const array = [...data[selection]].sort(() => Math.random() - 0.5)
    array.splice(12, 0, "FREE BINGO")
    setBingoData(array)
  }, [selection])

  const handleSelect = (e: any) => {
    setSelection(e.target.value)
  }

  return (
    <div className="h-96">
      <select value={selection} onChange={handleSelect}>
        {Object.keys(data).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <div className="bingoCardContainer">
        {bingoData.map((item, index) => {
          return (
            <div key={index} className="bingoCard">
              {item}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
