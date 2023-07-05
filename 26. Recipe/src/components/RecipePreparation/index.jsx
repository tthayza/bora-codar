import { Basket, CookingPot } from '@phosphor-icons/react'
import './style.css'
export const RecipePreparation = () => {
  return (
    <div className="recipe-preparation">
      <div className="ingredients">
        <h2>
          <Basket size={35} color="#FEECE0" />
          Ingredientes
        </h2>
        <ul>
          <li>1 espiga de milho verde</li>
          <li>1 colher de sopa de açúcar</li>
          <li>1 colher de sopa de manteiga</li>
          <li>Sal a gosto</li>
          <li>Palma de milho (para embrulhar)</li>
        </ul>
      </div>
      <div className="method">
        <h2>
          <CookingPot size={35} color="#FEECE0" weight="regular" />
          Modo de preparo
        </h2>
        <ol>
          <li>Descasque a espiga de milho e corte os grãos.</li>
          <li>Bata o milho, açúcar, manteiga e sal no liquidificador.</li>
          <li>Coloque a massa nas palhas de milho e feche bem.</li>
          <li>Cozinhe em água fervente por cerca de 40 minutos.</li>
          <li>Deixe esfriar e sirva.</li>
        </ol>
      </div>
    </div>
  )
}
