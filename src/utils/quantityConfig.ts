import { setLocalStorageQuantityCoffee } from './localStorageConfig'

export function sumTotalQuantity(
  totalQuantityCoffee: number,
  newQuantity: number,
) {
  return totalQuantityCoffee + newQuantity
}

export function subTotalQuantity(
  totalQuantityCoffee: number,
  newQuantity: number,
) {
  return totalQuantityCoffee - newQuantity
}

export function alterTotalQuantityStorage(
  totalQuantityCoffee: number,
  newQuantity: number,
  operation: string,
) {
  const add = sumTotalQuantity(totalQuantityCoffee, newQuantity)
  const sub = subTotalQuantity(totalQuantityCoffee, newQuantity)

  if (operation === 'add') {
    return setLocalStorageQuantityCoffee(add)
  } else if (operation === 'sub') {
    return setLocalStorageQuantityCoffee(sub)
  }
}
