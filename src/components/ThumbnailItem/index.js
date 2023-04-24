// Write your code here.
import {Component} from 'react'
import './index.css'

// Write your code here.

class ThumbnailItem extends Component {
  render() {
    const {eachItem, updateImage, isActive} = this.props
    const {imageUrl, imageAltText, thumbnailUrl, thumbnailAltText} = eachItem

    const onImageClick = () => {
      updateImage(imageUrl, imageAltText)
    }

    const activeClass = isActive ? 'activestyle' : ''

    return (
      <li className="list-item" onClick={onImageClick}>
        <button className="btn" type="button">
          <img
            className={`changestyle ${activeClass}`}
            src={thumbnailUrl}
            alt={thumbnailAltText}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
