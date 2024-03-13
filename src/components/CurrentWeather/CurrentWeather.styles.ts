import styled from 'styled-components'

export const CurrentWeatherContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  grid-area: current;
  background-color: var(--content-bg);
  backdrop-filter: blur(30px);
  border-radius: 12px;
  margin: 16px 0;
`

export const Result = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-text-light);
`

export const OtherResults = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

export const WeatherIcon = styled.img`
  height: 60px;
`

export const OtherResult = styled.div`
  font-size: 18px;
  text-align: center;
  color: var(--color-text-light);
  padding: 18px;
`

export const OtherResultValue = styled.span`
  font-size: 26px;
  line-height: 40px;
`

export const SecondaryResults = styled.div`
  grid-area: header;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

export const Temperature = styled.h2`
  position: relative;
  font-size: 80px;
  color: #ffffff;
  margin: 0;

  span {
    font-size: 20px;
    margin-left: 10px;
  }
`

export const SecondaryResult = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-align: left;
  color: var(--color-text);
  line-height: 25px;
  padding: 18px;
`

export const SecondaryResultIcon = styled.div`
  font-size: 50px;
`

export const SecondaryResultText = styled.p`
  margin-left: 10px;
`
