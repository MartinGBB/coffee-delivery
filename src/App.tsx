import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { CoffeContextProvider } from './components/context/coffeeContext'
import { Router } from './components/Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeContextProvider>
          <ToastContainer autoClose={1800} />
          <Router />
        </CoffeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
