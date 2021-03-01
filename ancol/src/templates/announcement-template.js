import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const ComponentName = ({ data }) => {
  const { pane, description } = data.announcement

  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <h1>{description}</h1>
            <p className="section">{pane}</p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleAnnouncement($slug: String) {
    announcement: strapiAnnouncements(slug: { eq: $slug }) {
      pane
      description
    }
  }
`

export default ComponentName
