
import { homedir } from 'os'
import { join } from 'path'
import { promises } from 'fs'
import { printError, printSuccess, printInfo} from './log.service.js'

const filePath = join(homedir(), 'weather-app-data.json')

const saveKeyValue = async (key, value) => {
    let data = {}
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath)
        data = JSON.parse(file)
    }
    data[key] = value
    await promises.writeFile(filePath, JSON.stringify(data))
}

const getKeyValue = async (key) => {
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath)
        const data = JSON.parse(file)
        return data[key]
    }
    return undefined
}

const isExist = async (path) => {
    try {
        await promises.stat(path)
        return true
    } catch (e) {
        return false
    }
}

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token)
        printSuccess('Token saved')
    } catch (error) {
        if (error instanceof SyntaxError) {
            promises.unlink(filePath)
            printInfo()
            saveToken(token)
        } else {
            console.log(error)
            printError(error.message)
        }
        
    }
}

export { saveKeyValue, getKeyValue, saveToken }