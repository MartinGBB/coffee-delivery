import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayaut'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<h1>Checkout</h1>} />
        <Route path="/success" element={<h1>Success</h1>} />
      </Route>
    </Routes>
  )
}
