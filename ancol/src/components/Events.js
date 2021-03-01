import React from "react"
import Title from "./Title"
import Event from "./Event"
import Carousel from "react-elastic-carousel"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1000, itemsToShow: 3 },
]

function Events({ events }) {
  return (
    <section className="section bg-grey">
      <Title title="Events" />
      <Carousel
        className="section-center services-center"
        breakPoints={breakPoints}
      >
        {events.map(event => {
          return <Event key={event.id} {...event} />
        })}
      </Carousel>
    </section>
  )
}

export default Events
