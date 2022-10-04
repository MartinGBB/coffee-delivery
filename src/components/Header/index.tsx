import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'

import { CoffeeContext } from '../context/coffeeContext'
import logo from '../../assets/logo.svg'

import { AddressContainer, HeaderContainer, ItemCart, NavInfo } from './styles'

export function Header() {
  const { totalQuantityCoffee } = useContext(CoffeeContext)

  const count = totalQuantityCoffee
  const haveItem = !!count

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <NavInfo>
        <AddressContainer>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </AddressContainer>
        <NavLink to="/checkout">
          <ShoppingCartSimple size={22} weight="fill" />
        </NavLink>
        <ItemCart haveItem={haveItem}>{count}</ItemCart>
      </NavInfo>
    </HeaderContainer>
  )
}
