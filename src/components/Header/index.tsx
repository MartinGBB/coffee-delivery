import { AddressContainer, HeaderContainer, ItemCart, NavInfo } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../context/coffeeContext'

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
