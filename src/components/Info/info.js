import React from "react"
import "./info.css"
import Section from "../Section/section"
// import desktopImg from "../../assets/image-header-desktop.jpg"
// import mobileImg from "../../assets/image-header-mobile.jpg"

const Info = () => {
  return (
    <Section>
      <div className="info-text-container">
        <h2 className="info-text-header">
          Get <span>insights</span> that help your business grow.
        </h2>
        <p className="info-text-description">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and over efficiency.</p>
        <ul className="info-text_numbers-container">
          <li className="info-text-number-data">
            <h2>10k+</h2>
            <span>Companies</span>
          </li>
          <li className="info-text-number-data">
            <h2>314</h2>
            <span>Templates</span>
          </li>
          <li className="info-text-number-data">
            <h2>12M+</h2>
            <span>Queries</span>
          </li>
        </ul>
      </div>
      <div className="info-image-container">{/* <img src={desktopImg} srcSet={`${mobileImg} 375w, ${desktopImg} 1080w`} alt="desktopimg" /> Method to swithc imgages depending on size  */}</div>
    </Section>
  )
}

export default Info
