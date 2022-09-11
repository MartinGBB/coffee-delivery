import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin: 11.375rem 10rem 11.375rem 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 2fr;
  row-gap: 0.75rem;
  column-gap: 2rem;

  @media (max-width: 1024px) {
    margin: 9rem 2rem 0 2rem;
    gap: 0;
  }
`
