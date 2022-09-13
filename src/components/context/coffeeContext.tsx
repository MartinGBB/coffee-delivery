import { createContext, ReactNode } from 'react'

const CoffeeContext = createContext({})

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeContextProvider({ children }: CoffeeContextProviderProps) {
  return <CoffeeContext.Provider value={{}}>{children}</CoffeeContext.Provider>
}
