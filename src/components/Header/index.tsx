import { AddressContainer, HeaderContainer, NavInfo } from './styles'
import logo from '../../assets/logo.svg'
import { ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <NavInfo>
        <AddressContainer>
          <span>Porto Alegre, RS</span>
        </AddressContainer>
        <div>
          <ShoppingCart size={28} weight="fill" />
        </div>
      </NavInfo>
    </HeaderContainer>
  )
}
