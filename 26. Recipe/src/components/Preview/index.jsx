import { MinusCircle, PlusCircle } from '@phosphor-icons/react'
import recipe from '../../assets/recipe.svg'
import './style.css'
export const Preview = (props) => {
  const { serving, servingHandler } = props
  return (
    <div className="preview flex">
      <figure>
        <img src={recipe} alt="" />
      </figure>
      <div className="description">
        <h1>Pamonha</h1>
        <p>Prato típico com milho verde ralado</p>
        <div className="servings">
          <p>Porções</p>
          <button
            className="minus btn"
            disabled={serving === 1}
            onClick={() => servingHandler('decreasing')}
          >
            <MinusCircle size={32} color="#9B6647" />
          </button>
          <p>{`${serving >= 0 && serving <= 9 ? '0' + serving : serving}`}</p>
          <button
            className="plus btn"
            onClick={() => servingHandler('increasing')}
          >
            <PlusCircle size={32} color="#9B6647" />
          </button>
        </div>
      </div>
    </div>
  )
}
