import React from "react"
import "./PortfolioItem.css"


const PortfolioItem = ({ title, active, setSelected, id }) => {
  return (
    <div
      className={"portfolio-item " + (active && "active")}
      onClick={() => setSelected(id)}
    >
      {title}
    </div>
  )
}

export default PortfolioItem
