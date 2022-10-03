import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

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
import {
  totalPriceProducts,
  totalPriceCart,
} from '../../utils/priceProductConfig'
import { totalQuantityProducts } from '../../utils/quantityConfig'
import { ConfirmOrder } from './ConfirmOrder'
import { FormPayment } from './FormPayment'

import {
  CheckoutContainer,
  ConfirmOrden,
  SelectedContainer,
  TotalContainer,
} from './styles'
import { toast } from 'react-toastify'

const newCoffeeFormValidateSchema = zod.object({
  cep: zod.string().max(8).min(8, 'Informe o CEP'),
  rua: zod.string().min(5, 'Informe a rua'),
  numero: zod.string().min(1, 'Informe o número'),
  bairro: zod.string().min(5, 'Informe o bairro'),
  cidade: zod.string().min(3, 'Informe o cidade'),
  uf: zod.string().max(2).min(2, 'Informe o bairro'),
  complemento: zod.string().optional(),
  payment: zod.string(),
})

export function Checkout() {
  const [itemsTotalPrice, setItemsTotalPrice] = useState('0,00')
  const [totalPrice, setTotalPrice] = useState('0,00')

  const navigate = useNavigate()

  const { addCoffee, setTotalQuantityCoffee } = useContext(CoffeeContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newCoffeeFormValidateSchema),
  })
  const emptyFiel: any = Object.values(errors)[0]?.message

  function confirmOrder(event: React.MouseEvent<HTMLButtonElement>) {
    //  event.preventDefault()
    // console.log(emptyFiel)
    // setLocalStorageCoffee([])
    // updateTotalQuantity()
    // navigate('/success')
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

  function handleCreateOrder() {
    if (!haveItemsToCart) return false
    navigate('/success')
    setLocalStorageCoffee([])
    updateTotalQuantity()
  }

  // const fieldsRequired = [
  //   'cep',
  //   'rua',
  //   'numero',
  //   'bairro',
  //   'cidade',
  //   'uf',
  //   'payment',
  // ]

  // const formData = watch(fieldsRequired)
  // const fieldsEmpty = formData.some((input: string[]) => !input)
  // const isSubmitDisabled = !(haveItemsToCart && !fieldsEmpty)

  function emptyFieldAlert() {
    toast.warn(emptyFiel)
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
            {/* <button onClick={confirmOrder}>CONFIRMAR PEDIDO</button> */}
            <button onClick={emptyFieldAlert}>CONFIRMAR PEDIDO</button>
          </SelectedContainer>
        </ConfirmOrden>
      </form>
    </CheckoutContainer>
  )
}
