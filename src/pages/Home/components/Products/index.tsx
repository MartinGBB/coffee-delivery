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
    addCoffee,
    setAddCoffee,
    totalQuantityCoffee,
    setTotalQuantityCoffee,
  } = useContext(CoffeeContext)

  function remplaceQuantity(oldCoffee: number) {
    const newState = Object.assign([{}], addCoffee)
    newState[oldCoffee].productQuantity += productQuantity
    setAddCoffee(newState)
  }

  function addNewProduct(coffee: CoffeeAdd) {
    setAddCoffee([...addCoffee, coffee])
  }

  function validateNewProduct(newCoffee: CoffeeAdd) {
    const productExist = addCoffee.findIndex(
      (cartItem: any) => cartItem.id === newCoffee.id,
    )

    productExist >= 0
      ? remplaceQuantity(productExist)
      : addNewProduct(newCoffee)

    setTotalQuantityCoffee(totalQuantityCoffee + productQuantity)
    setProductQuantity(1)
  }

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
