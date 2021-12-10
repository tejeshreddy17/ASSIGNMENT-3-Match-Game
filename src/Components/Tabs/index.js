import './index.css'

const Tabs = props => {
  const {eachTab, tabselected, isTabselected} = props
  const {tabId, displayText} = eachTab
  const onclickingTab = () => {
    tabselected(tabId)
  }
  return (
    <li>
      <button
        className={
          isTabselected ? 'button-design selectedTab-style' : 'button-design'
        }
        onClick={onclickingTab}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default Tabs
