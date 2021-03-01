import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Event = ({ date, description, id, slug }) => {
  return (
    <article className="events">
      <div className="container">
        <div className="card">
          <div className="circle">
            <h2>{date}</h2>
          </div>
          <div className="content">
            <p>{description}</p>
            <Link to={`/events/${slug}`} key={id}>
              <div className="btn">Read More</div>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

Event.propTypes = {}

export default Event
