import { createContext, ReactNode, useEffect, useState } from 'react'
import { productsData } from '../../utils/productsData'

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
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeContextProvider({ children }: CoffeeContextProviderProps) {
  const [coffeeData, setCoffeeData] = useState<ProductsData[]>([])
  const [addCoffee, setAddCoffee] = useState<CoffeeAdd[]>([])

  useEffect(() => {
    setCoffeeData(productsData)
  }, [coffeeData])

  return (
    <CoffeeContext.Provider
      value={{
        coffeeData,
        addCoffee,
        setAddCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
