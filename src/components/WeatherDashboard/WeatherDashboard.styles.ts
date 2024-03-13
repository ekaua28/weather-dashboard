import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const ContentContainer = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'current forecast'
    'chart forecast';
  grid-gap: 30px;

  border-radius: 12px;
  padding: 30px;
  width: 100%;

  @media (max-width: 1250px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'current'
      'forecast'
      'chart';
    padding: 30px 15px;
  }
`
