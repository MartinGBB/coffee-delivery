import { CoffeeAdd } from '../components/context/coffeeContext'
import { getLocalStorageCoffee } from './localStorageConfig'

function convertStringToNumber(price: string | undefined) {
  const remplaceStr = price?.replace(',', '.')
  return Number(remplaceStr)
}

function totalPrice(price: number[]) {
  return price.reduce((acc: number, curr: number) => (acc += curr), 0)
}

function totalPricePerItem(priceAndQuantity: number[][]) {
  const price = priceAndQuantity.map((item: any) => (item[1] *= item[0]))
  return totalPrice(price)
}
function getPriceAndQuantity(productsCart: CoffeeAdd[]) {
  const products = productsCart.map((product: CoffeeAdd) => [
    convertStringToNumber(product.price),
    product.productQuantity,
  ])
  return totalPricePerItem(products)
}

export function priceProducto() {
  const getPoducts = getLocalStorageCoffee()
  // return getPriceAndQuantity(getPoducts)
  return console.log(getPriceAndQuantity(getPoducts))
}
