import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const ComponentName = ({ data }) => {
  const { date, desc } = data.event

  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <h1>{date}</h1>
            <p className="section">{desc}</p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleEvent($slug: String) {
    event: strapiEvents(slug: { eq: $slug }) {
      date
      desc
    }
  }
`

export default ComponentName
