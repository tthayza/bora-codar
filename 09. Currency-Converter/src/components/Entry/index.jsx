
import "./styles.css"

function Entry(props) {
  return(
    <div className="entry">
      <input
        type="text"
        name="currency-entry"
        id="currency-entry"
        className="entry-base text"
        onChange={(e) => props.setInputValue(e.target.value)}
        value={props.inputValue}
        disabled={props.disabled}
      />
      <p> | </p>
      <select
        className="entry-base selection"
        value={props.currencyValue}
        onChange={(e) => props.setSelectedCurrency(e.target.value)}
      >
        {Object.entries(props.data).map(([key, value]) => {
          return <option key={key} value={value}>{key}</option>
        })}
      </select>
    </div>
  )
}
export default Entry