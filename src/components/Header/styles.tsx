import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  background: ${({ theme }) => theme.background};
  z-index: 2;

  @media (max-width: 1024px) {
    padding: 2rem;
  }
`
export const NavInfo = styled.div`
  display: flex;
  gap: 0.75rem;

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${({ theme }) => theme['yellow-light']};
    border: none;
    cursor: pointer;
    box-shadow: none;

    & svg {
      color: ${({ theme }) => theme['yellow-dark']};
    }
  }
`

export const AddressContainer = styled.span`
  background: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};
  display: flex;
  font-size: 0.875rem;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;

  svg {
    color: ${({ theme }) => theme.purple};
  }
`

interface HaveItem {
  haveItem: boolean
}

export const ItemCart = styled.span<HaveItem>`
  width: 1.125rem;
  height: 1.125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.white};

  background: ${({ theme }) => theme['yellow-dark']};
  border-radius: 1000px;

  position: absolute;
  top: 25px;
  right: 150px;

  display: ${({ haveItem }) => !haveItem && 'none'};

  @media (max-width: 1024px) {
    top: 25px;
    right: calc(150px - 9.3rem);
  }
`
