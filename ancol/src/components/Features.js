import React from "react"
import Feature from "./Feature"

const Features = ({ features }) => {
  return (
    <section className="section projects">
      <div className="section-center projects-center">
        {features.map(feature => {
          return <Feature key={feature.id} {...feature} />
        })}
      </div>
    </section>
  )
}

export default Features
