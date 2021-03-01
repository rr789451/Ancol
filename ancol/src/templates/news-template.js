import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const ComponentName = ({ data }) => {
  const { title, desc } = data.newi

  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <h1>{title}</h1>
            <p className="section">{desc}</p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleNew($slug: String) {
    newi: strapiNews(slug: { eq: $slug }) {
      title
      desc
    }
  }
`

export default ComponentName
