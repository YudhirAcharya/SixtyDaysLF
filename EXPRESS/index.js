const http = require('http')
const {readFileSync}=require('fs');

//get all files
const homePage =readFileSync('./index.html')
const homeStyles =readFileSync('./styles.css')
const homeImage =readFileSync('./yudhirs-logo.png')
const homeLogic =readFileSync('./app.js')

const server =http.createServer((req, res)=>
{
    const url = req.url;
    if(url ==='/')//home page
    {
    res.writeHead(200,{'content-type':'text/html'}) ///status code, header(what file type are you sending)
    res.write(homePage)//response
    res.end()//---should always have end
    }
    else if(url ==='/about')// about page
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Us</h1>')
        res.end()
    }
    else if(url ==='/styles.css')
    {
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if(url ==='/yudhirs-logo.png')
    {
        res.writeHead(200,{'content-type':'image/svg'})
        res.write(homeImage)
        res.end()
    }
    else if(url ==='/app.css')
    {
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else//404
    {
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})
server.listen(5000)  