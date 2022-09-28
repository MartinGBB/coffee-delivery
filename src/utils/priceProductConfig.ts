import { CoffeeAdd } from '../components/context/coffeeContext'
import { getLocalStorageCoffee } from './localStorageConfig'

function formatTotalPrice(price: number) {
  return price.toFixed(2).replace('.', ',')
}

function totalPrice(price: number[]) {
  const sumPrice = price.reduce((acc: number, curr: number) => (acc += curr), 0)
  return formatTotalPrice(sumPrice)
}

function totalPricePerItem(priceAndQuantity: number[][]) {
  const price = priceAndQuantity.map((item: any) => (item[1] *= item[0]))
  return totalPrice(price)
}

function convertStringToNumber(price: string | undefined) {
  const remplaceStr = price?.replace(',', '.')
  return Number(remplaceStr)
}

function getPriceAndQuantity(productsCart: CoffeeAdd[]) {
  const products = productsCart.map((product: CoffeeAdd) => [
    convertStringToNumber(product.price),
    product.productQuantity,
  ])
  return totalPricePerItem(products)
}

export function priceProduct() {
  const getPoducts = getLocalStorageCoffee()
  return getPriceAndQuantity(getPoducts)
}

export function totalPriceCart(totalPriceProducts: string) {
  const DELIVERY = '3,50'
  const priceDelibery = convertStringToNumber(DELIVERY)
  const priceItems = convertStringToNumber(totalPriceProducts)
  const total = formatTotalPrice(priceDelibery + priceItems)
  return total
}
