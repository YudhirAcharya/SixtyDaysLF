const {format} = require('date-fns')
const{v4:uuid} =require('uuid')
const {fs}= require('fs')
const {fsPromises} = require('fs').promises
const {path} =require('path')


const logEvents =async(message) =>
{
    const dateTime =format(new Data(),'yyyyMMdd\tHH:mm:ss' )
    const logItem =dateTime + uuid() + message
    console.log(logItem)
    try{
        await fsPromises.appendFile(path.join(__dirname,'eventLog.txt'),logItem)
    }
    catch(err){ console.log(err)}
}

module.exports = {logEvents}

