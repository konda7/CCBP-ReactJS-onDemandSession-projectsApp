import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isactive} = props
  const {displayText, tabId} = tabDetails

  const onClickUpdateActiveTabId = () => {
    updateActiveTabId(tabId)
  }

  const activateClassName = isactive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activateClassName}`}
        onClick={onClickUpdateActiveTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
