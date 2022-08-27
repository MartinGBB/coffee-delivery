import { AddressContainer, HeaderContainer, NavInfo } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <h1>Header</h1>
      <NavInfo>
        <AddressContainer>
          <span>Porto Alegre, RS</span>
        </AddressContainer>
        <div>Cart</div>
      </NavInfo>
    </HeaderContainer>
  )
}
