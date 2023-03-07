import { useEffect, useState } from 'react'
import "./styles.css"
import Entry from "../Entry"
function BoxHeader() {
  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${import.meta.env.VITE_CURRENCY_API_KEY}`)
    .then(data => {
      return data.json();
    })
    .then(data => {
      setCurrencies(data)
    });
  }, [])

  const leftSide = {
      data:{
          USD: 1,
        },
  }
  const [inputValue, setInputValue] = useState(1)
  const [outputValue, setOutputValue]= useState(1)
  const [inputCurrency, setInputCurrency] = useState(1)
  const [outputCurrency, setOutputCurrency] = useState(1)


  // useEffect(() => {
  //   console.log(inputCurrency)

  // }, [inputCurrency])
  // useEffect(() => {
  //   console.log(outputCurrency)
  // }, [outputCurrency])

    useEffect(() => {
      const result = inputValue * outputCurrency
      setOutputValue(new Intl.NumberFormat({style: 'currency'}).format(result))

    }, [inputValue, outputCurrency])


  return(
    <div className="box-header">
      <div className="title">
        <h1>Conversor de Moedas</h1>
      </div>

      <div className="conversor">
        <div className="base-currency">
          <Entry
            setInputValue={setInputValue}
            setSelectedCurrency={setInputCurrency}
            data={leftSide.data}
            inputValue={inputValue}
            currencyValue={inputCurrency}
          />
        </div>


        <div className="destiny-currency">
          <Entry
            setInputValue={setOutputValue}
            setSelectedCurrency={setOutputCurrency}
            data={currencies.data || []}
            inputValue={outputValue}
            currencyValue={outputCurrency}
            disabled
          />
        </div>
      </div>
    </div>
  )
}
export default BoxHeader