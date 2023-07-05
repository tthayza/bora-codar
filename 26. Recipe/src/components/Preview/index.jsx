import { MinusCircle, PlusCircle } from '@phosphor-icons/react'
import recipe from '../../assets/recipe.svg'
import './style.css'
export const Preview = () => {
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
          <button className="minus btn">
            <MinusCircle size={32} color="#9B6647" />
          </button>
          <p>01</p>
          <button className="plus btn">
            <PlusCircle size={32} color="#9B6647" />
          </button>
        </div>
      </div>
    </div>
  )
}
