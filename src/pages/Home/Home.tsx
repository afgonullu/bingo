import clsx from "clsx"
import { useEffect, useState } from "react"
import Fireworks from "../../components/Fireworks/Fireworks"

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

  const handleReset = () => {
    setSelectedDeck("books and authors worth reading")
    setSelectedItems([12])
    setGameWon(false)
  }

  return (
    <>
      {isGameWon && <Fireworks />}
      <div className="controls">
        <select className="selectBox" value={selectedDeck} onChange={handleSelectDeck}>
          {Object.keys(bingoDecks).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <button className={clsx("resetButton", isGameWon && "resetButtonEmphasised")} onClick={handleReset}>
          {isGameWon ? "Start a New Round" : "Reset"}
        </button>
      </div>

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
      {isGameWon && <h2>You Win!!! Congratulations!!!</h2>}
    </>
  )
}

export default Home
