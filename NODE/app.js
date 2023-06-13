const {createReadStream} =require('fs')
const path = require('path')
const stream = createReadStream(path.join(__dirname, 'test2.txt'), {encoding:'utf8'})
stream.on('data', (result)=>
{
    console.log(result)
})
stream.on('error', (err)=>
{
    console.log(err)
})