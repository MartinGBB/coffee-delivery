import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${({ theme }) => theme['base-card']};
  width: 16rem;
  height: 19.375rem;
  position: absolute;
  border-radius: 6px 36px;
  text-align: center;

  img {
    position: absolute;
    left: calc(50% - 140px / 2);
    top: -20px;
  }
`
