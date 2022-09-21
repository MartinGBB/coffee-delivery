import { CoffeeAdd } from '../components/context/coffeeContext'
import {
  getLocalStorageCoffee,
  setLocalStorageCoffee,
} from './localStorageConfig'

export function remplaceQuantity(oldCoffee: number, quantity: number) {
  const newState = Object.assign([{}], getLocalStorageCoffee())
  newState[oldCoffee].productQuantity += quantity
  setLocalStorageCoffee(newState)
  // setAddCoffee(newState)
}

export function addNewProduct(coffee: CoffeeAdd) {
  setLocalStorageCoffee([...getLocalStorageCoffee(), coffee])
  // setAddCoffee([...addCoffee, coffee])
}
