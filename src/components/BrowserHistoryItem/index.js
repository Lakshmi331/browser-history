import './index.css'

const BrowserHistoryItem = props => {
  const {historyDetails, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <li className="list-items">
      <div className="item">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button type="button" onClick={onClickDelete} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistoryItem
