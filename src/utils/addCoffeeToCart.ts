import { CoffeeAdd } from '../components/context/coffeeContext'
import {
  getLocalStorageCoffee,
  setLocalStorageCoffee,
} from './localStorageConfig'

function remplaceQuantity(oldCoffee: number, quantity: number) {
  const newState = Object.assign([{}], getLocalStorageCoffee())
  newState[oldCoffee].productQuantity += quantity
  setLocalStorageCoffee(newState)
}

function addNewProduct(coffee: CoffeeAdd) {
  setLocalStorageCoffee([...getLocalStorageCoffee(), coffee])
}

export function validateNewProduct(
  newCoffee: CoffeeAdd,
  productQuantity: number,
) {
  const productExist = getLocalStorageCoffee().findIndex(
    (cartItem: any) => cartItem.name === newCoffee.name,
  )

  productExist >= 0
    ? remplaceQuantity(productExist, productQuantity)
    : addNewProduct(newCoffee)
}
