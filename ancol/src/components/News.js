import React from "react"
import Title from "./Title"
import Newi from "./Newi"
import Carousel from "react-elastic-carousel"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]

const News = ({ news }) => {
  return (
    <section className="section bg-grey">
      <Title title="News" />
      <Carousel
        className="section-center services-center"
        breakPoints={breakPoints}
      >
        {news.map(newi => {
          return <Newi key={newi.id} {...newi} />
        })}
      </Carousel>
    </section>
  )
}
export default News
