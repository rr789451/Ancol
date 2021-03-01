import React from "react"
import Title from "./Title"
import Carousel from "react-elastic-carousel"
import Announcement from "./Announcement"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]

const Announcements = ({ announcements }) => {
  return (
    <section className="section bg-grey">
      <Title title="Announcements" />
      <Carousel
        className="section-center services-center"
        breakPoints={breakPoints}
      >
        {announcements.map(announcement => {
          return <Announcement key={announcement.id} {...announcement} />
        })}
      </Carousel>
    </section>
  )
}

export default Announcements
