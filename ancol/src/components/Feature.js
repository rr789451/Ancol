import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Feature = ({ description, title, id, name, image, slug }) => {
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <span className="project-number">{name}</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-links">
          <Link to={`/features/${slug}`} key={id}>
            <div className="btn">Read More</div>
          </Link>
        </div>
      </div>
    </article>
  )
}

Feature.propTypes = {}

export default Feature
