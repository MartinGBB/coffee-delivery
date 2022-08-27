import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`
export const NavInfo = styled.div`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${({ theme }) => theme['yellow-light']};

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
`
