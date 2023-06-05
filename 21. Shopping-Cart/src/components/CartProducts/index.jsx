import closeBtn from '../../assets/close.svg'
import monitorImg from '../../assets/product-img-1.svg'
import chairImg from '../../assets/product-img-2.svg'
import keyboardImg from '../../assets/product-img-3.svg'
import headsetImg from '../../assets/product-img-4.svg'
import duckImg from '../../assets/product-img-5.svg'
import tag from '../../assets/tag.svg'
import Product from '../Product'
import './style.css'

const CartProducts = (props) => {
  const { increase, decreases, total, totalItems } = props

  const formatedTotal =
    total <= 0
      ? 'R$0,00'
      : total.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })
  return (
    <div className="cart-products">
      <header className="title">
        <h1>
          Seu carrinho tem{' '}
          <span>
            {totalItems} {totalItems === 1 ? 'item' : 'itens'}
          </span>
        </h1>
        <img src={closeBtn} alt="botão para fechar" />
      </header>
      <main className="products-area">
        <Product
          name="Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD"
          price="8599.90"
          image={monitorImg}
          increase={increase}
          decreases={decreases}
        />
        <Product
          name="Cadeira Gamer  RGB - Preta com Iluminação (Led)"
          price="959.90"
          image={chairImg}
          increase={increase}
          decreases={decreases}
        />
        <Product
          name="Teclado Gamer Mecânico Low Profile RGB AW510K 580"
          price="1002.00"
          image={keyboardImg}
          increase={increase}
          decreases={decreases}
        />
        <Product
          name="Headset Gamer RGB Preto"
          price="99.90"
          image={headsetImg}
          increase={increase}
          decreases={decreases}
        />
        <Product
          name="Patinho De Borracha Para Banho"
          price="19.90"
          image={duckImg}
          increase={increase}
          decreases={decreases}
        />
      </main>
      <footer>
        <div className="total">
          <p>Total:</p>
          <p className="total-price">{formatedTotal}</p>
        </div>
        <div className="coupon">
          <img src={tag} alt="" />
          <p>Adicionar cupom</p>
        </div>
        <div className="btn">
          <button>Finalizar compra</button>
        </div>
      </footer>
    </div>
  )
}

export default CartProducts
