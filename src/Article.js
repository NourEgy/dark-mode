
import moment from 'moment'
const Article = ({ title, snippet , length, date }) => {

  return (
    <article className="post">
      <h2> {title} </h2>
      <div className="post-info">
        <span>{moment(date).format('dddd Do YYYY')}</span>
        <span> {length} min red </span>
      </div>
      <p> {snippet} </p>

    </article>
  )
}

export default Article