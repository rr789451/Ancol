import React from "react"
import PageTitle from "./Page-Title"
import { graphql, useStaticQuery } from "gatsby"
import { FaBars } from "@react-icons/all-files/fa/FaBars"

const query = graphql`
  {
    allStrapiAcademics(sort: { fields: strapiId, order: ASC }) {
      nodes {
        strapiId
        department
        article {
          id
          heading
          desc
        }
      }
    }
  }
`

function Page_sidebar() {
  function toggleMenu() {
    let navigation = document.querySelector(".navigation")
    let toggle = document.querySelector(".toggle")
    navigation.classList.toggle("active")
    toggle.classList.toggle("active")
  }

  const data = useStaticQuery(query)
  const {
    allStrapiAcademics: { nodes: academics },
  } = data
  const [value, setValue] = React.useState(0)
  const { department, article } = academics[value]

  return (
    <article>
      <div className="navigation">
        <ul>
          {academics.map((item, index) => {
            return (
              <li>
                <a onClick={() => setValue(index)}>
                  <span className="title" key={item.strapiId}>
                    {item.department}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="toggle" onClick={toggleMenu}>
        <FaBars />
      </div>
      <PageTitle title={department} className="ml10" />
      <section className="section width">
        <div className="job-center">
          <article className="job-info">
            {article.map(item => {
              return (
                <div key={item.id} className="center">
                  <h5>{item.heading}</h5>
                  <p>{item.desc}</p>
                </div>
              )
            })}
          </article>
        </div>
      </section>
    </article>
  )
}

export default Page_sidebar
