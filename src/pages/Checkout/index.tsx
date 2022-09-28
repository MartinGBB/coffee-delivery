import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CoffeeContext,
  CoffeeAdd,
  ProductsData,
} from '../../components/context/coffeeContext'
import {
  getLocalStorageCoffee,
  getLocalStorageQuantityCoffee,
  setLocalStorageCoffee,
} from '../../utils/localStorageConfig'
import { priceProduct, totalPriceCart } from '../../utils/priceProductConfig'
import { totalQuantityProducts } from '../../utils/quantityConfig'
import { ConfirmOrder } from './ConfirmOrder'
import { FormPayment } from './FormPayment'

import {
  CheckoutContainer,
  ConfirmOrden,
  SelectedContainer,
  TotalContainer,
} from './styles'

export function Checkout() {
  const [itemsTotalPrice, setItemsTotalPrice] = useState('0,00')
  const [totalPrice, setTotalPrice] = useState('0,00')
  const { addCoffee, setTotalQuantityCoffee } = useContext(CoffeeContext)
  const navigate = useNavigate()

  function confirmOrder() {
    navigate('/success')
  }

  function updateTotalQuantity() {
    totalQuantityProducts()
    const getTotalQuantity = getLocalStorageQuantityCoffee()
    setTotalQuantityCoffee(getTotalQuantity)
  }

  function updateProductCart(updateState: CoffeeAdd[]) {
    setLocalStorageCoffee(updateState)

    updateTotalQuantity()
  }

  function updateQuantityProduct(
    newQuantity: number,
    productName: string | undefined,
    operation: string,
  ) {
    const productExist = addCoffee.findIndex(
      (cartItem: any) => cartItem.name === productName,
    )
    const newState = Object.assign([{}], getLocalStorageCoffee())

    if (operation === 'add') {
      newState[productExist].productQuantity += newQuantity
      updateProductCart(newState)
    } else if (operation === 'sub') {
      newState[productExist].productQuantity -= newQuantity
      updateProductCart(newState)
    }
  }

  function deleteProduct(product: ProductsData) {
    const selectCoffee = addCoffee.filter(
      (oldListCoffee) => oldListCoffee.name !== product.name,
    )
    setLocalStorageCoffee(selectCoffee)
    updateTotalQuantity()
  }

  function handleItemsPrice() {
    const priceTotalItens = priceProduct()
    setItemsTotalPrice(priceTotalItens)
  }

  function handleTotalPriceCart() {
    const totalCart = totalPriceCart(itemsTotalPrice)
    setTotalPrice(totalCart)
  }

  useEffect(() => {
    handleItemsPrice()
    handleTotalPriceCart()
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <CheckoutContainer>
      <FormPayment />

      <ConfirmOrden>
        <h1>Cafés selecionados</h1>
        <SelectedContainer>
          {!addCoffee.length ? (
            <div>
              <h2>Ainda não tem produtos no carrinho</h2>
            </div>
          ) : (
            addCoffee.map((product) => (
              <ConfirmOrder
                key={product.id}
                product={product}
                updateQuantityProduct={updateQuantityProduct}
                deleteProduct={deleteProduct}
              />
            ))
          )}

          <TotalContainer>
            <span>Total de itens</span>
            <span>
              R$ <span>{itemsTotalPrice}</span>
            </span>
            <span>Entrega</span>
            <span>
              R$ <span>3,50</span>
            </span>
            <h1>Total</h1>
            <h1>
              R$ <span>{totalPrice}</span>
            </h1>
          </TotalContainer>
          <button onClick={confirmOrder}>CONFIRMAR PEDIDO</button>
        </SelectedContainer>
      </ConfirmOrden>
    </CheckoutContainer>
  )
}
