const {readFile, writeFile} = require('fs')
readFile('./text.txt','utf8', (err, result)=>
{
    if(err)
    {
        console.log(err)
        return
    }
    const first = result;
    readFile('./test2.txt', 'utf8', (err,result)=>
    {
        if(err)
        {
            console.log(err)
            return
        }  
        const second = result
        writeFile('./text.txt','sync  text',(err,result)=>
        {
            if(err)
            {
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})