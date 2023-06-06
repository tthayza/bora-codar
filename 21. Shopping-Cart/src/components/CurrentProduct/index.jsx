import './style.css'

const CurrentProduct = (props) => {
  const { name, price, image } = props
  console.log(name)
  console.log(price)
  console.log(image)
  return (
    <div className="current-product">
      <figure className="product-img">
        <img src={image} alt="" />
      </figure>
      <div className="product-infos">
        <h1>{name}</h1>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default CurrentProduct
