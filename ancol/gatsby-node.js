const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      announcements: allStrapiAnnouncements {
        nodes {
          slug
        }
      }
      features: allStrapiFeatures {
        nodes {
          slug
        }
      }
      events: allStrapiEvents {
        nodes {
          slug
        }
      }
      news: allStrapiNews {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.announcements.nodes.forEach(announcement => {
    createPage({
      path: `/announcements/${announcement.slug}`,
      component: path.resolve(`src/templates/announcement-template.js`),
      context: {
        slug: announcement.slug,
      },
    })
  })

  result.data.features.nodes.forEach(feature => {
    createPage({
      path: `/features/${feature.slug}`,
      component: path.resolve(`src/templates/feature-template.js`),
      context: {
        slug: feature.slug,
      },
    })
  })

  result.data.events.nodes.forEach(event => {
    createPage({
      path: `/events/${event.slug}`,
      component: path.resolve(`src/templates/event-template.js`),
      context: {
        slug: event.slug,
      },
    })
  })

  result.data.news.nodes.forEach(newi => {
    createPage({
      path: `/news/${newi.slug}`,
      component: path.resolve(`src/templates/news-template.js`),
      context: {
        slug: newi.slug,
      },
    })
  })
}
