// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {name, imgUrl} = destination

  return (
    <li className="destination-card-container">
      <img src={imgUrl} className="image" alt={name} />
      <p className="image-name">{name}</p>
    </li>
  )
}

export default DestinationItem
