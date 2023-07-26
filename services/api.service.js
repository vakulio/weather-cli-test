import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'
import axios from 'axios'
import process from 'process'

const getWeather = async (city) => {
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token)
    if (!token) {
        throw new Error('Token undefined - check your key `-w`')
    }
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            units: 'metric',
            lang: 'ru'
        }
    })
    console.log(data)
    return data
}

export { getWeather }