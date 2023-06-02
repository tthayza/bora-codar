import './style.css'
const Product = (props) => {
  const { name, price, image } = props

  return (
    <div className="product">
      <figure>
        <img src={image} alt="imagem do produto" />
      </figure>
      <div className="description">
        <div className="product-name">
          <h3>{name}</h3>
        </div>
        <div className="infos">
          <p>{price}</p>
          <div className="amount">
            <button className="minus btn"></button>
            <p>0</p>
            <button className="plus btn"></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
