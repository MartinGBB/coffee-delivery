import { useContext, useState } from 'react'

import { ShoppingCartSimple } from 'phosphor-react'
import uuid from 'react-uuid'

import {
  CoffeeAdd,
  // CoffeeAdd,
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
import {
  addNewProduct,
  remplaceQuantity,
} from '../../../../utils/addCoffeeToCart.js'
import {
  getLocalStorageCoffee,
  getLocalStorageQuantityCoffee,
  setLocalStorageQuantityCoffee,
} from '../../../../utils/localStorageConfig.js'

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

  function validateNewProduct(newCoffee: CoffeeAdd, productQuantity: number) {
    const productExist = getLocalStorageCoffee().findIndex(
      (cartItem: any) => cartItem.id === newCoffee.id,
    )

    productExist >= 0
      ? remplaceQuantity(productExist, productQuantity)
      : addNewProduct(newCoffee)

    setLocalStorageQuantityCoffee(totalQuantityCoffee + productQuantity)
    setProductQuantity(1)
  }

  function newProduct() {
    const newCoffee = {
      ...product,
      productQuantity,
    }
    validateNewProduct(newCoffee, productQuantity)
    const getTotalQuantity = getLocalStorageQuantityCoffee()
    setTotalQuantityCoffee(getTotalQuantity)
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
