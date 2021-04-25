import React from "react"
import ArticleName from "./ArticleName"
import ArticleStart from "./ArticleStart"

const Article = ({ name, start, tags }) => {
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">

        <ArticleName>{name}</ArticleName>
        <ArticleStart start={start} />
  )
      </div>
    </li>
  )
}
export default Article