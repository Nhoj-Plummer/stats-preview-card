import React from "react"
import "./info.css"
import Section from "../Section/section"
import desktopImg from "../../assets/image-header-desktop.jpg"
import mobileImg from "../../assets/image-header-mobile.jpg"

const Info = () => {
  return (
    <Section>
      <div className="info-text-container">
        <h2 className="info-text-header">Get insights that help your business grow.</h2>
        <p className="info-text-description"></p>
        <ul className="info-text_numbers-container"></ul>
      </div>
      <div className="info-image-container">
        {/* <img src={desktopImg} srcSet={`${mobileImg} 375w, ${desktopImg} 1080w`} alt="desktopimg" /> */}
      </div>
    </Section>
  )
}

export default Info
