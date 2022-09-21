import { useContext, useState } from 'react'

import { ShoppingCartSimple } from 'phosphor-react'
import uuid from 'react-uuid'

import {
  CoffeeAdd,
  CoffeeContext,
  ProductsData,
} from '../../../../components/context/coffeeContext.js'
import { QuantityItemsButtons } from '../../../../components/QuantityItemsButtons/index.js'

import {
  BuyContainer,
  CardContainer,
  CartButton,
  DetailsCoffee,
  PriceContainer,
  TypeCoffee,
} from './styles'

export interface ProductsProps {
  product: ProductsData
}

export function Products({ product }: ProductsProps) {
  const [productQuantity, setProductQuantity] = useState(1)
  const {
    // addCoffee,
    // setAddCoffee,
    totalQuantityCoffee,
    setTotalQuantityCoffee,
  } = useContext(CoffeeContext)

  function setLocalStorageCoffee(newCoffee: CoffeeAdd[]) {
    const stateJSON = JSON.stringify(newCoffee)
    localStorage.setItem('@coffee-delibery:product-cart-1.0.0', stateJSON)
  }

  function getLocalStorageCoffee() {
    const storeStateJSON = localStorage.getItem(
      '@coffee-delibery:product-cart-1.0.0',
    )
    return storeStateJSON ? JSON.parse(storeStateJSON) : []
  }

  function setLocalStorageQuantityCoffee(quantity: number) {
    const stateJSON = JSON.stringify(quantity)
    localStorage.setItem(
      '@coffee-delibery:product-cart-quantity-1.0.0',
      stateJSON,
    )
  }

  function getLocalStorageQuantityCoffee() {
    const storeState = localStorage.getItem(
      '@coffee-delibery:product-cart-quantity-1.0.0',
    )
    return storeState ? JSON.parse(storeState) : 0
  }

  function remplaceQuantity(oldCoffee: number) {
    const newState = Object.assign([{}], getLocalStorageCoffee())
    newState[oldCoffee].productQuantity += productQuantity
    setLocalStorageCoffee(newState)
    // setAddCoffee(newState)
  }

  function addNewProduct(coffee: CoffeeAdd) {
    setLocalStorageCoffee([...getLocalStorageCoffee(), coffee])
    // setAddCoffee([...addCoffee, coffee])
  }

  function validateNewProduct(newCoffee: CoffeeAdd) {
    const productExist = getLocalStorageCoffee().findIndex(
      (cartItem: any) => cartItem.id === newCoffee.id,
    )

    productExist >= 0
      ? remplaceQuantity(productExist)
      : addNewProduct(newCoffee)

    setLocalStorageQuantityCoffee(totalQuantityCoffee + productQuantity)
    setProductQuantity(1)
  }

  const getTotalQuantity = getLocalStorageQuantityCoffee()
  setTotalQuantityCoffee(getTotalQuantity)

  function newProduct() {
    const newCoffee = {
      ...product,
      productQuantity,
    }
    validateNewProduct(newCoffee)
  }

  function handleQuantity(quantity: string) {
    if (quantity === 'add') {
      setProductQuantity((state) => (state += 1))
    } else if (quantity === 'sub') {
      setProductQuantity((state) => (state === 1 ? 1 : (state -= 1)))
    }
  }

  return (
    <CardContainer>
      <div>
        <img src={product.image} alt={product.name} />
        <TypeCoffee>
          {product.type.map((coffeType) => (
            <span key={uuid()}>{coffeType}</span>
          ))}
        </TypeCoffee>
        <DetailsCoffee>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </DetailsCoffee>
        <BuyContainer>
          <PriceContainer>
            <span>R$</span>
            <h1>{product.price}</h1>
          </PriceContainer>
          <QuantityItemsButtons
            handleQuantity={handleQuantity}
            quantity={productQuantity}
          />
          <CartButton onClick={newProduct}>
            <ShoppingCartSimple size={22} weight="fill" />
          </CartButton>
        </BuyContainer>
      </div>
    </CardContainer>
  )
}
