import React from "react"
import "./info.css"
import Section from "../Section/section"
import desktopImg from "../../assets/image-header-desktop.jpg"
import mobileImg from "../../assets/image-header-mobile.jpg"

const Info = () => {
  return (
    <Section>
      <div className="info-text-container"></div>
      <div className="info-image-container">
        <img src={desktopImg} srcSet={`${mobileImg} 375w, ${desktopImg} 1080w`} alt="desktopimg" />
      </div>
    </Section>
  )
}

export default Info
