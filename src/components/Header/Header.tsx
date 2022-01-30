import clsx from "clsx"
import { useState } from "react"

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState("light")
  const switchTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light")
      setTheme("light")
    } else {
      localStorage.setItem("theme", "dark")
      setTheme("dark")
    }
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div onClick={switchTheme} className={clsx("input-base", "ml-2", `switchPos-${theme}`)}>
      <div className="w-7 h-7">
        <div className="input-control w-7 h-7"></div>
      </div>
    </div>
  )
}

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-container">
        <p>Bingo Game</p>
        <div className="flex items-center">
          Switch Theme
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Header
