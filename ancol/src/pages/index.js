import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import News from "../components/News"
import Features from "../components/Features"
import Announcements from "../components/Announcements"
import Events from "../components/Events"

export default ({ data }) => {
  const {
    allStrapiFeatures: { nodes: features },
    allStrapiAnnouncements: { nodes: announcements },
    allStrapiEvents: { nodes: events },
    allStrapiNews: { nodes: news },
  } = data

  return (
    <Layout>
      <Hero />
      <Announcements announcements={announcements} />
      <Features features={features} />
      <Events events={events} />
      <News news={news} />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiFeatures {
      nodes {
        slug
        title
        name
        id
        desc
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStrapiAnnouncements {
      nodes {
        slug
        title
        description
        id
      }
    }
    allStrapiEvents {
      nodes {
        id
        description
        date
        slug
        desc
      }
    }
    allStrapiNews {
      nodes {
        id
        slug
        title
        desc
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
