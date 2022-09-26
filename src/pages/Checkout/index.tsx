import { useContext } from 'react'
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
import { alterTotalQuantityStorage } from '../../utils/quantityConfig'
import { ConfirmOrder } from './ConfirmOrder'
import { FormPayment } from './FormPayment'

import {
  CheckoutContainer,
  ConfirmOrden,
  SelectedContainer,
  TotalContainer,
} from './styles'

export function Checkout() {
  const { addCoffee, totalQuantityCoffee, setTotalQuantityCoffee } =
    useContext(CoffeeContext)
  const navigate = useNavigate()

  function confirmOrder() {
    navigate('/success')
  }

  function updateTotalQuantity() {
    const getTotalQuantity = getLocalStorageQuantityCoffee()
    setTotalQuantityCoffee(getTotalQuantity)
  }

  function updateProductCart(
    updateState: CoffeeAdd[],
    newQuantity: number,
    operation: string,
  ) {
    setLocalStorageCoffee(updateState)
    alterTotalQuantityStorage(totalQuantityCoffee, newQuantity, operation)
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
      updateProductCart(newState, newQuantity, operation)
    } else if (operation === 'sub') {
      newState[productExist].productQuantity -= newQuantity
      updateProductCart(newState, newQuantity, operation)
    }
  }

  function deleteProduct(product: ProductsData) {
    const selectCoffee = addCoffee.filter(
      (oldListCoffee) => oldListCoffee.name !== product.name,
    )
    setLocalStorageCoffee(selectCoffee)
  }

  return (
    <CheckoutContainer>
      <FormPayment />

      <ConfirmOrden>
        <h1>Cafés selecionados</h1>
        <SelectedContainer>
          {addCoffee.map((product) => (
            <ConfirmOrder
              key={product.id}
              product={product}
              updateQuantityProduct={updateQuantityProduct}
              deleteProduct={deleteProduct}
            />
          ))}

          <TotalContainer>
            <span>Total de itens</span>
            <span>
              R$ <span>29,70</span>
            </span>
            <span>Entrega</span>
            <span>
              R$ <span>3,50</span>
            </span>
            <h1>Total</h1>
            <h1>
              R$ <span>33,20</span>
            </h1>
          </TotalContainer>
          <button onClick={confirmOrder}>CONFIRMAR PEDIDO</button>
        </SelectedContainer>
      </ConfirmOrden>
    </CheckoutContainer>
  )
}
