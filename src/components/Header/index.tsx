import { AddressContainer, HeaderContainer, NavInfo } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <NavInfo>
        <AddressContainer>
          <span>Porto Alegre, RS</span>
        </AddressContainer>
        <div>Cart</div>
      </NavInfo>
    </HeaderContainer>
  )
}
