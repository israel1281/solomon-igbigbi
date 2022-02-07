import React from "react"
import "./services.css"

import { services } from "../../data/data"

import { ServicesCard } from "./ServicesCard/ServicesCard"
import { Heading } from "../Heading/Heading"

const Services = () => {
  return (
    <section
      data-aos="fase-right"
      className="services-container"
      name="services"
      id="services"
    >
      <Heading text="Services" />
      <div className="services-cards">
        {services?.map(({ title, iconSrc, tags }, index) => (
          <ServicesCard key={index} image={iconSrc} title={title} tags={tags} />
        ))}
      </div>
    </section>
  )
}


export default Services
