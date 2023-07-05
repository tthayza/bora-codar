import { Basket, CookingPot } from '@phosphor-icons/react'
import './style.css'
export const RecipePreparation = (props) => {
  const { serving } = props
  return (
    <div className="recipe-preparation">
      <div className="ingredients">
        <h2>
          <Basket size={35} color="#FEECE0" />
          Ingredientes
        </h2>
        <ul>
          <li>
            {serving < 1 ? 1 : serving} espiga{`${serving > 1 ? 's' : ''}`} de
            milho verde
          </li>
          <li>
            {serving < 1 ? 1 : serving} colher{`${serving > 1 ? 'es' : ''}`} de
            sopa de açúcar
          </li>
          <li>
            {serving < 1 ? 1 : serving} colher{`${serving > 1 ? 'es' : ''}`} de
            sopa de manteiga
          </li>
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
