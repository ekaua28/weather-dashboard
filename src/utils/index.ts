const CLOUD_COVER_MAP = new Map<number, string>([
  [0, '0%'],
  [1, '0%-6%'],
  [2, '6%-19%'],
  [3, '19%-31%'],
  [4, '31%-44%'],
  [5, '44%-56%'],
  [6, '56%-69%'],
  [7, '69%-81%'],
  [8, '81%-94%'],
  [9, '94%-100%'],
])

const PRECIPITATION_MAP = new Map<number, string>([
  [0, 'None'],
  [1, '0-0.25mm/hr'],
  [2, '0.25-1mm/hr'],
  [3, '1-4mm/hr'],
  [4, '4-10mm/hr'],
  [5, '10-16mm/hr'],
  [6, '16-30mm/hr'],
  [7, '30-50mm/hr'],
  [8, '50-75mm/hr'],
  [9, 'Over 75mm/hr'],
])

export const DEFAULT_WEATHER = 'cloudy_d'

export const WEATHER_MAP = new Map<string, string>([
  ['clear_d', process.env.PUBLIC_URL + '/assets/icons/clear_d.svg'],
  ['clear_n', process.env.PUBLIC_URL + '/assets/icons/clear_n.svg'],
  ['mcloudy_d', process.env.PUBLIC_URL + '/assets/icons/mcloudy_d.svg'],
  ['mcloudy_n', process.env.PUBLIC_URL + '/assets/icons/mcloudy_n.svg'],
  ['pcloudy_d', process.env.PUBLIC_URL + '/assets/icons/mcloudy_d.svg'],
  ['pcloudy_n', process.env.PUBLIC_URL + '/assets/icons/mcloudy_n.svg'],
  ['cloudy_d', process.env.PUBLIC_URL + '/assets/icons/cloudy.svg'],
  ['cloudy_n', process.env.PUBLIC_URL + '/assets/icons/cloudy.svg'],
  ['humid_d', process.env.PUBLIC_URL + '/assets/icons/rain_d.svg'],
  ['humid_n', process.env.PUBLIC_URL + '/assets/icons/rain_n.svg'],
  ['rain_d', process.env.PUBLIC_URL + '/assets/icons/rain_d.svg'],
  ['rain_n', process.env.PUBLIC_URL + '/assets/icons/rain_n.svg'],
  ['lightrain_d', process.env.PUBLIC_URL + '/assets/icons/rain_d.svg'],
  ['lightrain_n', process.env.PUBLIC_URL + '/assets/icons/rain_n.svg'],
  ['ishower_d', process.env.PUBLIC_URL + '/assets/icons/rain_d.svg'],
  ['ishower_n', process.env.PUBLIC_URL + '/assets/icons/rain_n.svg'],
  ['oshower_d', process.env.PUBLIC_URL + '/assets/icons/rain_d.svg'],
  ['oshower_n', process.env.PUBLIC_URL + '/assets/icons/rain_n.svg'],
  ['tsrain_n', process.env.PUBLIC_URL + '/assets/icons/tsrain.svg'],
  ['tsrain_d', process.env.PUBLIC_URL + '/assets/icons/tsrain.svg'],
  ['ts_d', process.env.PUBLIC_URL + '/assets/icons/ts_d.svg'],
  ['ts_n', process.env.PUBLIC_URL + '/assets/icons/ts_n.svg'],
  ['snow_d', process.env.PUBLIC_URL + '/assets/icons/snow_d.svg'],
  ['snow_n', process.env.PUBLIC_URL + '/assets/icons/snow_n.svg'],
  ['rainsnow_d', process.env.PUBLIC_URL + '/assets/icons/snow_d.svg'],
  ['rainsnow_n', process.env.PUBLIC_URL + '/assets/icons/snow_n.svg'],
  ['lightsnow_d', process.env.PUBLIC_URL + '/assets/icons/snow_d.svg'],
  ['lightsnow_n', process.env.PUBLIC_URL + '/assets/icons/snow_n.svg'],
])

export const DAY_TIME_BG_MAP = new Map<string, string>([
  ['n', process.env.PUBLIC_URL + '/assets/backgrounds/night_bg.jpg'],
  ['d', process.env.PUBLIC_URL + '/assets/backgrounds/day_bg.jpg'],
])

export const isDayTime = () => {
  const hours = new Date().getHours()
  return hours > 6 && hours < 20
}

export const getDayTime = () => (isDayTime() ? 'd' : 'n')

export const getBgImage = () => DAY_TIME_BG_MAP.get(getDayTime())

export const getWeatherIcon = (weather?: string) => {
  const res = WEATHER_MAP.get(`${weather}_${getDayTime()}`)
  return res ?? WEATHER_MAP.get(DEFAULT_WEATHER)
}

export const getPrecipitation = (precipitation?: number) =>
  PRECIPITATION_MAP.get(precipitation ?? 0)

export const getCloudCover = (cloudCover?: number) =>
  CLOUD_COVER_MAP.get(cloudCover ?? 0)

export const getFormatedDate = (date: number) => {
  const parts = /^(\d{4})(\d{2})(\d{2})$/.exec(`${date}`)
  return parts ? `${parts[1]}-${parts[2]}-${parts[3]}` : `${date}`
}
