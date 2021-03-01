import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import "../assets/bootstrap/dist/css/bootstrap.min.css"
import { Link } from "gatsby"

const Newi = ({ title, image, desc, id, slug }) => {
  return (
    <Link to={`/news/${slug}`} key={id}>
      <article className="blog">
        <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
        </div>
      </article>
    </Link>
  )
}

Newi.propTypes = {}

export default Newi
