import './index.css'

const TabItems = props => {
  const {eachThumbnail, clickingImages} = props
  const {id, thumbnailUrl} = eachThumbnail
  const onclickingImages = () => {
    clickingImages(id)
  }
  return (
    <li>
      <img
        className="thumbail-style"
        alt="thumbnail"
        onClick={onclickingImages}
        src={thumbnailUrl}
      />
    </li>
  )
}

export default TabItems
