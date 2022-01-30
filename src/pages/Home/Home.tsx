import clsx from "clsx"
import { useEffect, useState } from "react"
import Fireworks from "../../components/Fireworks/Fireworks"

import { bingoDecks, winningConditions } from "./gameConstants"

const Home: React.FC = () => {
  const [selectedDeck, setSelectedDeck] = useState("books and authors worth reading")
  const [bingoData, setBingoData] = useState<string[]>([])

  const [isGameWon, setGameWon] = useState<boolean>(false)
  const [possibleWinConditions, setPossibleWinConditions] = useState<number[][]>(winningConditions)
  const [selectedItems, setSelectedItems] = useState<number[]>([12])

  useEffect(() => {
    if (isGameWon) {
      setTimeout(() => {
        setGameWon(false)
      }, 3000)
    }
  }, [isGameWon])

  useEffect(() => {
    const array = [...bingoDecks[selectedDeck]].sort(() => Math.random() - 0.5)
    array.splice(12, 0, "FREE BINGO")
    setBingoData(array)
  }, [selectedDeck])

  const checkWinner = () => {
    for (let i = 0; i < possibleWinConditions.length; i++) {
      if (possibleWinConditions[i].every((value) => selectedItems.indexOf(value) >= 0)) {
        const newArray = [...possibleWinConditions]
        newArray.splice(i, 1)
        setPossibleWinConditions(newArray)
        setGameWon(true)
      }
    }
  }

  useEffect(() => {
    checkWinner()
  }, [selectedItems])

  const handleSelectDeck = (e: { target: { value: string } }) => {
    setSelectedDeck(e.target.value)
    setSelectedItems([12])
    setGameWon(false)
    setPossibleWinConditions(winningConditions)
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
    setPossibleWinConditions(winningConditions)
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
      {isGameWon && <h2>You Got A Bingo!</h2>}
    </>
  )
}

export default Home
