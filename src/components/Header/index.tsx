import { AddressContainer, HeaderContainer, NavInfo } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <NavInfo>
        <AddressContainer>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </AddressContainer>
        <div>
          <ShoppingCartSimple size={22} weight="fill" />
        </div>
      </NavInfo>
    </HeaderContainer>
  )
}
