import { CoffeeAdd } from '../components/context/coffeeContext'
import {
  getLocalStorageCoffee,
  setLocalStorageQuantityCoffee,
} from './localStorageConfig'

export const totalQuantityProducts = () => {
  const updateTotalQuantity = getLocalStorageCoffee()
    .flatMap((product: CoffeeAdd) => product.productQuantity)
    .reduce((acc: number, curr: number) => (acc += curr), 0)
  return setLocalStorageQuantityCoffee(updateTotalQuantity)
}
