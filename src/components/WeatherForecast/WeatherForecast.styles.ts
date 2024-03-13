import styled from 'styled-components'

export const ForecastContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  grid-area: forecast;
`

export const ForecastResults = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--content-bg);
  backdrop-filter: blur(30px);
  border-radius: 12px;
  padding: 16px 0;
`

export const ForecastResult = styled.div`
  display: flex;
  text-align: center;
  color: var(--color-text-light);
  gap: 16px;
  align-items: center;

`

export const ForecastResultValue = styled.span`
  font-size: 26px;
  line-height: 40px;
`

export const WeatherIcon = styled.img`
  height: 36px;
`
