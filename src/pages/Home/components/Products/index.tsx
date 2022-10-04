import { useContext, useState } from 'react'

import { ShoppingCartSimple } from 'phosphor-react'
import uuid from 'react-uuid'

import {
  CoffeeContext,
  ProductsData,
} from '../../../../components/context/coffeeContext.js'
import { QuantityItemsButtons } from '../../../../components/QuantityItemsButtons/index.js'
import { validateNewProduct } from '../../../../utils/addCoffeeToCart.js'
// import { getLocalStorageQuantityCoffee } from '../../../../utils/localStorageConfig.js'
import { totalQuantityProducts } from '../../../../utils/quantityConfig.js'

import {
  BuyContainer,
  CardContainer,
  CartButton,
  DetailsCoffee,
  PriceContainer,
  TypeCoffee,
} from './styles'
import { toast } from 'react-toastify'

export interface ProductsProps {
  product: ProductsData
}

export function Products({ product }: ProductsProps) {
  const [productQuantity, setProductQuantity] = useState(1)
  const { setTotalQuantityCoffee } = useContext(CoffeeContext)

  function newProduct() {
    const newCoffee = {
      ...product,
      productQuantity,
    }
    validateNewProduct(newCoffee, productQuantity)
    toast.success(`${product.name} adicionado`, {
      position: toast.POSITION.TOP_CENTER,
    })

    setProductQuantity(1)
    const countTotalQuantityProducts = totalQuantityProducts()
    setTotalQuantityCoffee(countTotalQuantityProducts)
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
