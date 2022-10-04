import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'

import {
  CoffeeContext,
  CoffeeAdd,
  ProductsData,
} from '../../components/context/coffeeContext'
import {
  getLocalStorageCoffee,
  setLocalStorageCoffee,
} from '../../utils/localStorageConfig'
import {
  totalPriceProducts,
  totalPriceCart,
} from '../../utils/priceProductConfig'
import { totalQuantityProducts } from '../../utils/quantityConfig'
import { ConfirmOrder } from './ConfirmOrder'
import { FormPayment } from './FormPayment'
import {
  newCoffeeFormValidateSchema,
  OrderDelivery,
} from '../../utils/validationsFormOrderDelivery'

import {
  CheckoutContainer,
  ConfirmOrden,
  SelectedContainer,
  TotalContainer,
} from './styles'

export function Checkout() {
  const [itemsTotalPrice, setItemsTotalPrice] = useState('0,00')
  const [totalPrice, setTotalPrice] = useState('0,00')

  const navigate = useNavigate()

  const { addCoffee, setTotalQuantityCoffee, setOrderDelivery } =
    useContext(CoffeeContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderDelivery>({
    resolver: zodResolver(newCoffeeFormValidateSchema),
  })

  const emptyFiels: any = Object.values(errors)[0]?.message

  function updateTotalQuantity() {
    const countTotalQuantityProducts = totalQuantityProducts()
    setTotalQuantityCoffee(countTotalQuantityProducts)
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
    const priceTotalItens = totalPriceProducts()
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

  const haveItemsToCart = !!addCoffee.length

  function handleCreateOrder(data: OrderDelivery) {
    if (!haveItemsToCart) return false

    setOrderDelivery([data])

    navigate('/success')
    setLocalStorageCoffee([])
    updateTotalQuantity()
  }

  function emptyFieldAlert() {
    toast.warn(emptyFiels)
    if (!haveItemsToCart) return toast.warn('carrinho vazio')
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateOrder)} action="">
        <FormPayment register={register} />

        <ConfirmOrden>
          <h1>Cafés selecionados</h1>
          <SelectedContainer>
            {!haveItemsToCart ? (
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
            <button onClick={emptyFieldAlert}>CONFIRMAR PEDIDO</button>
          </SelectedContainer>
        </ConfirmOrden>
      </form>
    </CheckoutContainer>
  )
}
