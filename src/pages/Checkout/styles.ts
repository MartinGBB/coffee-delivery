import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin: 9rem 10rem 0 10rem;
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

  > div {
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

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 0.75rem;
      border: 1px solid ${({ theme }) => theme['base-button']};
      border-radius: 4px;
      color: ${({ theme }) => theme['base-text']};
      background: ${({ theme }) => theme['base-button']};
    }

    > div:first-child {
      display: flex;
      gap: 1rem;
      flex-direction: column;

      & input:first-child {
        width: 12.5rem;
      }
    }

    & div:nth-child(2) {
      padding: 1.82rem 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      & input {
        height: fit-content;
      }

      & label {
        display: flex;
        align-items: center;
        background: ${({ theme }) => theme['base-button']};
        padding-right: 0.75rem;
        border-radius: 4px;
        color: ${({ theme }) => theme['base-label']};
      }
    }

    > div:nth-child(3) {
      display: flex;
      justify-content: space-between;
      gap: 0.75rem;

      & input:nth-child(2) {
        width: 100%;
      }

      & input:nth-child(3) {
        width: 3rem;
      }
    }

    @media (max-width: 610px) {
      div {
        flex-wrap: wrap;
      }
    }
  }
`

export const ContainerPagament = styled.div``

export const SelectPagament = styled.div``

export const ConfirmOrden = styled.div``

export const OrdemContainer = styled.div``
