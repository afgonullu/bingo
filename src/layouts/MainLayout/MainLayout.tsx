const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="background">
      <div className="app-container">{children}</div>
    </div>
  )
}

export default MainLayout
