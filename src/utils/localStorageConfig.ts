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
