import clsx from "clsx"
import { useEffect, useState } from "react"

import { bingoDecks, winningConditions } from "./gameConstants"

const Home: React.FC = () => {
  const [selectedDeck, setSelectedDeck] = useState("books and authors worth reading")
  const [bingoData, setBingoData] = useState<string[]>([])

  const [isGameWon, setGameWon] = useState<boolean>(false)
  const [selectedItems, setSelectedItems] = useState<number[]>([12])

  useEffect(() => {
    const array = [...bingoDecks[selectedDeck]].sort(() => Math.random() - 0.5)
    array.splice(12, 0, "FREE BINGO")
    setBingoData(array)
  }, [selectedDeck])

  const checkWinner = () => {
    for (let i = 0; i < winningConditions.length; i++) {
      if (winningConditions[i].every((value) => selectedItems.indexOf(value) >= 0)) {
        setGameWon(true)
      }
    }
  }

  useEffect(() => {
    checkWinner()
  }, [selectedItems])

  const handleSelectDeck = (e: any) => {
    setSelectedDeck(e.target.value)
    setSelectedItems([12])
    setGameWon(false)
  }

  const handleSelectItem = (item: string, index: number) => {
    if (!selectedItems.includes(index)) {
      setSelectedItems((prev) => [...prev, index].sort((a, b) => a - b))
    }
  }

  return (
    <div className="h-full">
      <select value={selectedDeck} onChange={handleSelectDeck}>
        {Object.keys(bingoDecks).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <div className="bingoCardContainer">
        {bingoData.map((item, index) => {
          const isSelected = selectedItems.includes(index)
          return (
            <div
              key={index}
              className={clsx("bingoCard", isSelected && "bingoCardSelected")}
              onClick={() => handleSelectItem(item, index)}
            >
              {item}
            </div>
          )
        })}
      </div>
      <div>{isGameWon && "You Win"}</div>
    </div>
  )
}

export default Home
