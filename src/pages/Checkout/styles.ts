import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin: 6.5rem 10rem 0 10rem;
  display: grid;

  @media (max-width: 1024px) {
    margin: 6.5rem 2rem 0 2rem;
  }
`
export const AddressContainer = styled.div`
  > h1 {
    font-weight: 700;
    font-size: 1.125rem;
    margin-bottom: 0.9375rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const FormContainer = styled.div`
  background: ${({ theme }) => theme['base-card']};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  div {
    display: grid;
    grid-template-columns: 22px 1fr;
    column-gap: 0.5rem;
    margin-bottom: 2rem;

    & h1 {
      grid-column: 2;
      color: ${({ theme }) => theme['base-subtitle']};
      font-size: 1rem;
    }

    & p {
      grid-column: 2;
      color: ${({ theme }) => theme['base-text']};
      font-size: 0.875rem;
    }

    & svg {
      color: ${({ theme }) => theme['yellow-dark']};
    }
  }
`

export const ContainerPagament = styled.div``

export const SelectPagament = styled.div``

export const ConfirmOrden = styled.div``

export const OrdemContainer = styled.div``
