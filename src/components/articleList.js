const ListArticle = ({ title, text, button }) => {
  return (
    <li className="col-lg-3 col-md-4 col-sm-6 list-group">
      <div className="card p-3 mb-4 shadow">

        <h2>{title} </h2>
        <p>{text}</p>
        <button type="button" className='btn btn-sm me-2 mb-2 bg-dark text-white' value={button} >lire plus </button>

      </div>
    </li>
  )
}
export default ListArticle