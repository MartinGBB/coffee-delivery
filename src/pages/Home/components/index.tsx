export function Products() {
  return (
    <div>
      <img src="../../../assets/coffesImages/Coffee.svg" alt="" />
      <div>
        <span>Tradicional</span>
        <span>com leite</span>
      </div>
      <div>
        <h1>Mocaccino</h1>
        <p>Café expresso com calda de chocolate, pouco leite e espuma</p>
      </div>
      <div>
        <div>
          <span>R$</span>
          <h1>9,90</h1>
        </div>
        <div>
          <div>
            <button>-</button>
            <input type="number" />
            <button>+</button>
          </div>
          <button>Cart</button>
        </div>
      </div>
    </div>
  )
}
