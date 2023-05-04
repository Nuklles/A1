const fs = require('fs')

fs.appendFile('clubesdeFutebol.txt', 'Vasco \n', (err)=>{
    if(err)throw err
    console.log('Arquivo criado com sucesso!');
})
