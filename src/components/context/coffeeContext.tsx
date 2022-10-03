import { createContext, ReactNode, useEffect, useState } from 'react'
import {
  getLocalStorageCoffee,
  getLocalStorageQuantityCoffee,
} from '../../utils/localStorageConfig'
import { productsData } from '../../utils/productsData'
import { OrderDelivery } from '../../utils/validationsFormOrderDelivery'

export interface ProductsData {
  id: string | undefined
  type: string[]
  name: string | undefined
  price: string | undefined
  description: string | undefined
  image: string | undefined
}

export interface CoffeeAdd extends ProductsData {
  productQuantity: number
}

interface CoffeeContextType {
  coffeeData: ProductsData[]
  addCoffee: CoffeeAdd[]
  setAddCoffee: (newState: CoffeeAdd[]) => void
  orderDelivery: OrderDelivery[]
  setOrderDelivery: (order: OrderDelivery[]) => void
  totalQuantityCoffee: number
  setTotalQuantityCoffee: (totalQuantity: number) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeContextProvider({ children }: CoffeeContextProviderProps) {
  const [coffeeData, setCoffeeData] = useState<ProductsData[]>([])
  const [addCoffee, setAddCoffee] = useState<CoffeeAdd[]>([])
  const [totalQuantityCoffee, setTotalQuantityCoffee] = useState<number>(
    getLocalStorageQuantityCoffee(),
  )
  const [orderDelivery, setOrderDelivery] = useState<OrderDelivery[]>([])
  useEffect(() => {
    setAddCoffee(getLocalStorageCoffee())
  }, [totalQuantityCoffee])

  useEffect(() => {
    setCoffeeData(productsData)
  }, [coffeeData])

  return (
    <CoffeeContext.Provider
      value={{
        coffeeData,
        addCoffee,
        setAddCoffee,
        orderDelivery,
        setOrderDelivery,
        totalQuantityCoffee,
        setTotalQuantityCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
