import Header from "../../components/Header/Header"

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="background">
      <Header />
      <div className="app-container">{children}</div>
    </div>
  )
}

export default MainLayout
