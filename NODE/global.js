const http = require('http')

const server = http.createServer((req, res)=>
{
    if(req.url==='/')
    {
        res.write('hello,welcome to webpage')
   
    }
    if(req.url ==='/about')
    {
        res.end("about ussss")
    }
    console.log(req)
    res.end('byee \n see you' 
    )
    
})

server.listen(5000)