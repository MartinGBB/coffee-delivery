import { CoffeeAdd } from '../components/context/coffeeContext'

export function setLocalStorageCoffee(newCoffee: CoffeeAdd[]) {
  const stateJSON = JSON.stringify(newCoffee)
  localStorage.setItem('@coffee-delibery:product-cart-1.0.0', stateJSON)
}

export function getLocalStorageCoffee() {
  const storeStateJSON = localStorage.getItem(
    '@coffee-delibery:product-cart-1.0.0',
  )
  return storeStateJSON ? JSON.parse(storeStateJSON) : []
}

export function setLocalStorageQuantityCoffee(quantity: number) {
  const stateJSON = JSON.stringify(quantity)
  localStorage.setItem(
    '@coffee-delibery:product-cart-quantity-1.0.0',
    stateJSON,
  )
}

export function getLocalStorageQuantityCoffee() {
  const storeState = localStorage.getItem(
    '@coffee-delibery:product-cart-quantity-1.0.0',
  )
  return storeState ? JSON.parse(storeState) : 0
}
