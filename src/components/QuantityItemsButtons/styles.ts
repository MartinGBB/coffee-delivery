import styled from 'styled-components'

export const ButtonsAddToCart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem !important;
  background: ${({ theme }) => theme['base-button']};
  padding: 0.5rem;
  justify-content: center;
  border-radius: 6px;

  span {
    width: 1.25rem;
    height: 1.32rem;
    color: ${({ theme }) => theme['base-title']};
    text-align: center;
  }

  button {
    border: none;
    color: ${({ theme }) => theme.purple};
    background: transparent;
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`
