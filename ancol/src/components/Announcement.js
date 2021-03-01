import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Announcement = ({ description, title }) => {
  return (
    <article className="service">
      <h3>{title}</h3>
      <div className="underline1"></div>
      <p>{description}</p>
    </article>
  )
}

Announcement.propTypes = {}

export default Announcement
