import styled from 'styled-components'

export const AddressContainer = styled.div`
  grid-column: 1;
  grid-row: 1;

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
  border-radius: 6px;

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
      background: ${({ theme }) => theme['base-input']};
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
      gap: 1rem;

      & input {
        height: fit-content;
      }

      & label {
        display: flex;
        align-items: center;
        background: ${({ theme }) => theme['base-input']};
        border: 1px solid ${({ theme }) => theme['base-button']};
        padding-right: 0.75rem;
        border-radius: 4px;
        color: ${({ theme }) => theme['base-label']};
      }
    }

    > div:nth-child(3) {
      display: flex;
      justify-content: space-between;
      gap: 0.75rem;
      flex-wrap: wrap;

      & input:nth-child(2) {
        width: 50%;
      }

      & input:nth-child(3) {
        width: 10%;
      }
    }
  }
`

export const ContainerPagament = styled.div`
  grid-column: 1;
  grid-row: 2;
  background: ${({ theme }) => theme['base-card']};
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px;
  max-height: 300px;

  > div:first-child {
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
      color: ${({ theme }) => theme.purple};
    }
  }
`

export const SelectPagament = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;

  label {
    user-select: none;
    height: 1rem;
    padding: 1rem;
    width: 100%;
    border: none;
    background: ${({ theme }) => theme['base-button']};
    font-weight: 400;
    font-size: 0.75rem;
    color: ${({ theme }) => theme['base-text']};
    display: flex;
    align-items: center;
    border-radius: 6px;
    border: 1px solid transparent;
    & svg {
      margin-right: 0.75rem;
      color: ${({ theme }) => theme.purple};
    }
  }

  label:has(input:checked) {
    border: 1px solid ${({ theme }) => theme.purple};
    background: ${({ theme }) => theme['purple-light']};
  }

  label:hover {
    background: ${({ theme }) => theme['base-hover']};
  }

  input[type='radio'] {
    display: none;
  }

  @media (min-width: 1024px) and (max-width: 1200px) {
    flex-wrap: wrap;
  }

  @media (max-width: 440px) {
    flex-wrap: wrap;
  }
`
export const ConfirmOrden = styled.div`
  grid-column: 2;
  grid-row: 1/3;

  @media (max-width: 1024px) {
    grid-column: 1;
    grid-row: 3;
  }

  > h1 {
    font-weight: 700;
    font-size: 1.125rem;
    margin-bottom: 0.9375rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`
