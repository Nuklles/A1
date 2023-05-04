const fs = require('fs')

fs.rename('clubesdeFutebol.txt', 'meuFile.txt', (err)=>{
    if(err)throw err
    console.log('Renomeado com Sucesso')
})