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

// export function validateNewProduct(
//   newCoffee: CoffeeAdd,
//   productQuantity: number,
// ) {
//   const productExist = getLocalStorageCoffee().findIndex(
//     (cartItem: any) => cartItem.id === newCoffee.id,
//   )

//   productExist >= 0
//     ? remplaceQuantity(productExist, productQuantity)
//     : addNewProduct(newCoffee)

//   //   setLocalStorageQuantityCoffee(totalQuantityCoffee + productQuantity)
//   //   setProductQuantity(1)
// }
