import closeBtn from '../../assets/close.svg'
import monitorImg from '../../assets/product-img-1.svg'
import chairImg from '../../assets/product-img-2.svg'
import keyboardImg from '../../assets/product-img-3.svg'
import headsetImg from '../../assets/product-img-4.svg'
import duckImg from '../../assets/product-img-5.svg'
import Product from '../Product'
import './style.css'

const CartProducts = () => {
  return (
    <div className="cart-products">
      <header className="title">
        <h1>
          Seu carrinho tem <span>5 itens</span>
        </h1>
        <img src={closeBtn} alt="botão para fechar" />
      </header>
      <main className="products-area">
        {/* <div className="prodd"> */}
        <Product
          name="Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD"
          price="R$ 8.599,90"
          image={monitorImg}
        />
        <Product
          name="Cadeira Gamer  RGB - Preta com Iluminação (Led)"
          price="R$ 959,90"
          image={chairImg}
        />
        <Product
          name="Teclado Gamer Mecânico Low Profile RGB AW510K 580"
          price="R$ 1.002,00"
          image={keyboardImg}
        />
        <Product
          name="Headset Gamer RGB Preto"
          price="R$ 99,90"
          image={headsetImg}
        />
        <Product
          name="Patinho De Borracha Para Banho"
          price="R$ 19,90"
          image={duckImg}
        />
        {/* </div> */}
      </main>
      <footer></footer>
    </div>
  )
}

export default CartProducts
