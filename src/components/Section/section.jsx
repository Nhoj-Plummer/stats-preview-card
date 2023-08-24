import React from "react"
import "./section.css"

const Section = props => {
  return <div className="section-container section-padding">{props.children}</div>
}

export default Section
