import './index.css'

const TabItems = props => {
  const {eachThumbnail, clickingImages} = props
  const {id, thumbnailUrl} = eachThumbnail
  const onclickingImages = () => {
    clickingImages(id)
  }
  return (
    <li>
      <button type="button" className="thumbnailButton">
        <img
          className="thumbail-style"
          alt="thumbnail"
          onClick={onclickingImages}
          src={thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default TabItems
